import React from 'react';
import  { Switch, Route, Redirect } from 'react-router-dom'; //Removed Link
import { connect } from 'react-redux';
import './App.css';


import HomePage from './pages/homepage/homepage.component';
// import HomePage from '../../src/homepage.component';
import ShopPage from './pages/shop/shop.compontent';
import Header from './components/header/header.compontent';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.compontent';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

// const HatsPage = () => (

//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

// const TopicsList = (props) => {
//   console.log(props);
//   return(
//       <div>
//         <h1>TOPIC LIST PAGE</h1>
//       </div>
//     );
// };

// const TopicDetail = (props) => {
//   console.log(props);
//   return (
//   <div>
//     <h1>Topic Detail Page: {props.match.params.topicId} </h1>
//   </div>

//   );
// };

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state= {
  //     currentUser: null
  //   };
  // }
  // constructor is no longer needed using redux

 // unsubscribeFromAuth = null;
  
  componentDidMount(){

    const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth => {

    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        //console.log(snapShot.data());

        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
    
            //, () =>{
        //  console.log(this.state); // Remember that to get the state it has to be here
        //}
        
      });
     // console.log(this.state);
    }
    // else{
    //   this.setState({currentUser : userAuth});
    // }

    setCurrentUser({userAuth });
   //   this.setState({ currentUser: user });
    //createUserProfileDocument(user);
     // console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

render(){
  return (
    <div>
      {/* <Header currentUser={ this.state.currentUser } />  after setting up redux we no longer need to pass the value*/} 
      <Header />
      <Switch>
        <Route exact path='/E-commerce' component={HomePage} />
        <Route path='/E-commerce/shop' component={ShopPage} />
        <Route  exact
         path='/E-commerce/signin'
         render={() =>
           this.props.currentUser ? (
          //  <Redirect to='/' />
          <Redirect to='/E-commerce/shop' />
           ) : ( 
            <SignInAndSignUpPage /> 
            )
          }
          />
        {/* <Route exact path='/E-commerce/signin' component={SignInAndSignUpPage} /> */}
        {/* <Route path='/E-commerce/hats' component={HatsPage} />
        <Route exact path='/E-commerce/topics' component={TopicsList}></Route>
        <Route path='/E-commerce/topics/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
    );

}

}


const mapStateToProps = ({ user }) => ({
 currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({

setCurrentUser: user => dispatch(setCurrentUser(user))

});
  


export default connect(
  mapStateToProps,
   mapDispatchToProps
    )(App);
