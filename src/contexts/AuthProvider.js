import { useQuery } from '@tanstack/react-query';
import { getAuth, updateProfile } from 'firebase/auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }







    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [user])

    const [payPrice, setPayPrice] = useState(0);

    const [cartLength, setCartLength] = useState(0);



    const authInfo = {
        user,
        loading,
        setLoading,
        logOut,
        emailSignIn,
        googleSignIn,
        createUser,
        updateUserProfile, payPrice, setPayPrice,
        cartLength, setCartLength


    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;