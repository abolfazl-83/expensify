import {google, auth} from '../firebase/firebase';

export const login = (uid) => {
    return {
        type : 'LOGIN',
        uid
    }
};
export const startLogin = () => {
    return () => {
         auth.signInWithPopup(google)
    };
};
export const logout = () => {
    return {
        type : 'LOGOUT'
    }
};
export const startLogout = () => {
    return () => {
         auth.signOut();
    };
};

