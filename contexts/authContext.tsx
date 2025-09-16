import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useContext, useState } from "react";

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
        router.replace('/(tabs)/gethelp');
    }

    const logOut = () => {
        setIsLoggedIn(false);
        router.replace('/signup');
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