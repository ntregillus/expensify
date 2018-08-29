import {firebase, googleAuthProvider} from '../firebase/firebase';


export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogout = () => {
    return () => {
        console.log('is this called?');
        return firebase.auth().signOut();
    };
};
export const logout = () => ({
    type: 'LOGOUT'
});