import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../../Firebase/Firebase.init';


export const authContext= createContext();
const auth= getAuth(app);

const AuthProvider = ({children}) => {
    // const user= {displayName: "Dipayan "};
const [user, setUser]= useState('null');

const [loading, isLoading]= useState(true);

    const providerLogin= (provider)=>{
        isLoading(true);
        return signInWithPopup(auth, provider);
        
    };

    const registerUser=(email, password)=>{
        isLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser=(email, password)=>{
        isLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const providerLogout= ()=>{
        isLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            console.log('user state changed', currentUser);
            setUser(currentUser);
        });

        return()=>{
            unsubscribe();
        }
    },[])


    const authInfo= {user,loading, providerLogin, providerLogout, registerUser, signInUser};
    return (
        <authContext.Provider value={ authInfo }>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;