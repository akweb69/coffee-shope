import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./Auth";

export const authContext = createContext();


const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const valueObj = {
        user,
        setUser,
        setLoader,
        createUser,
        signinUser,
    }
    return (
        <authContext.Provider value={valueObj}>
            {
                children
            }
        </authContext.Provider>
    );
};

export default AuthContext;