import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { FacebookAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [ loading ,setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true)
        signOut(auth)
    }
    const GoogleProvider = new GoogleAuthProvider();
    const createGoogleUser =()=>{
        return signInWithPopup(auth ,GoogleProvider)
    }
    const twitterProvider = new TwitterAuthProvider();
    const createTwitterUser =()=>{
        return signInWithPopup(auth ,twitterProvider)
    }

    const facebookProvider = new FacebookAuthProvider();
    const createFacebookUser =() =>{
        return signInWithPopup(auth , facebookProvider)
    }
    
    const githubProvider = new GithubAuthProvider();
    const createGithubUser =() =>{
        return signInWithPopup(auth , githubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        createUser, 
        setUser, 
        user, 
        signOutUser,
        signInUser,
        loading,
        createTwitterUser,
        createFacebookUser,
        createGithubUser,
        createGoogleUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;