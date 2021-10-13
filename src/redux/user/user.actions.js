import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({

  //  type:'SET_CURRENT_USER', //ensure  this is the same as in the user reducer
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user

});