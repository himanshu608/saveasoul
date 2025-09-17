import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useLocation } from "./locationContext";

type AuthState = {
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
}

const AuthContext = createContext<AuthState>({
    isLoggedIn: false,
    logIn: () => {},
    logOut: () => {}
});

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const logIn = () => {
        setIsLoggedIn(true);
        router.replace('/');
    }

    const logOut = () => {
        setIsLoggedIn(false);
        router.replace('/');
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}