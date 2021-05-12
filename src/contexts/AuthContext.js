// import axios from "axios";
import React, { useReducer, useEffect, useState } from "react";
// import { AUTH_API, LOGIN_API, REGISTER_API } from "../helpers/Constants";
import app from "../base.js";

import Cookies from "universal-cookie";

export const authContext = React.createContext();

const INIT_STATE = {
    isAuth: false,
    currentUser: null,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [currentUser, setCurrentUser] = useState(null);
    const cookies = new Cookies();

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            dispatch({
                type: "GET_CURRENT_USER",
                payload: user,
            });
            console.log(user);
        });
    }, []);

    async function registerUser(event, newUser, history) {
        event.preventDefault();
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(
                    newUser.email,
                    newUser.password
                );
            history.push("/login");
            console.log(currentUser);
        } catch (err) {
            console.log(err);
        }
    }

    async function loginUser(event, userData, history) {
        event.preventDefault();
        try {
            const newUser = await app
                .auth()
                .signInWithEmailAndPassword(userData.email, userData.password);
            setCurrentUser(newUser.user);
            console.log(currentUser);
            dispatch({
                type: "GET_CURRENT_USER",
                payload: currentUser,
            });
            history.push("/");
        } catch (err) {
            console.log(err);
        }
    }

    const logoutUser = async () => {
        try {
            await app.auth().signOut();
            console.log("User Logged Out!");
            dispatch({
                type: "GET_CURRENT_USER",
                payload: null,
            });
        } catch (err) {
            console.log("err:", err);
        }
    };

    return (
        <authContext.Provider
            value={{
                currentUser: state.currentUser,
                registerUser,
                loginUser,
                logoutUser,
            }}
        >
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;
