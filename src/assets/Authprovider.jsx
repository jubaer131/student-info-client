import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "./Firebase.config";






export const authContest = createContext()

const Authprovider = ({ children }) => {

    const creatuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const creatsignin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authinfo = { creatuser, creatsignin }

    return (
        <div>
            <authContest.Provider value={authinfo}>
                {children}
            </authContest.Provider>
        </div>
    );
};

export default Authprovider;