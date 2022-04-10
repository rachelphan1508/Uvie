import { AUTH, LOGOUT } from '../constants/actionTypes.js';


const authReducer = (state= {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile',JSON.stringify({...action?.data}))//set all data to local storage
            return {...state, authData:action?.data};
        case LOGOUT:
            localStorage.clear();
        default:
            return {...state, authData:null};
    }
}

export default authReducer;
