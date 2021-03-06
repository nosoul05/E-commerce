import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
          <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='./shop'>
                SHOP
            </Link>
            <Link className='option' to='E-commerce/shop'>
                Contact
            </Link>
            {currentUser ?
            (
            
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </div>
            
        
            ) :
            (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
            <CartIcon />

            {/* {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/E-commerce/signin'>SIGN IN</Link>

            } */}
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
       =
    </div>

);

const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) => ({

    // currentUser: state.user.currentUser,
    currentUser,
    hidden

});

export default connect(mapStateToProps)(Header);