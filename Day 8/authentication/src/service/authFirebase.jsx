import app from './firebase'; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

var auth = getAuth(app());

const signUp = async(email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User is registered in.');
        return {
            email: user.email
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        return {
            error: errorMessage
        };
    }
}

const signIn = async(email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User is registered in.');
        return {
            email: user.email
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        return {
            error: errorMessage
        };
    }
};

const logout = () => {
    auth.signOut().then(() => {
        console.log('user signed out')
    }).catch((error) => {
        console.log('error signing out')
    });
};

const checkUserLoggedIn = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log('user is signed in')
            return {
                uid: uid,
                user: user
            };
        } else {
            console.log('user is not signed in')
        }
    });
};

export {
    signIn,
    signUp,
    logout,
    checkUserLoggedIn
}