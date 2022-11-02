import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../../Firebase/Firebase.init';


export const authContext= createContext();
const auth= getAuth(app);

const AuthProvider = ({children}) => {
    // const user= {displayName: "Dipayan "};
const [user, setUser]= useState('null');

    const providerLogin= (provider)=>{
        return signInWithPopup(auth, provider);
    };

    const registerUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const providerLogout= ()=>{
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


    const authInfo= {user, providerLogin, providerLogout, registerUser};
    return (
        <authContext.Provider value={ authInfo }>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;