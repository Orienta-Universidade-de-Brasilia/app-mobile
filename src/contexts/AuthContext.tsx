import { UserDTO } from "../dtos/UserDTO";
import { ReactNode, createContext, useState, useEffect } from "react";
import { storageUserGet } from "../storage/storageUser";
import { storageAuthTokenSave } from "../storage/storageAuthToken";
import { api } from "../services/api";

export type AuthContextDataProps = {
    user: UserDTO;
    setUser: (user: UserDTO) => void;
    login: (email: string, password: string) => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children } : AuthContextProviderProps) {
    
    const [user, setUser] = useState({});

    async function login(email: string, password: string) {
        try {

            const { data } = await api.post('/auth/login', { email, password});
            setUser({...user, token: data.accesstoken, refreshToken: data.refreshToken});

        } catch(error) {
            throw error;
        }
    }



    async function storageToken(token: string) {
        //api.defaults.header.common['Authorization'] = `Bear ${token}`;

        await storageAuthTokenSave(token);
    }

    async function loadUserData() {
        const userLogged = storageUserGet();

        if(userLogged) {
            setUser(userLogged);
        }
    }

    useEffect(() => {
        loadUserData();
    }, [])

    return (
        <AuthContext.Provider value={
            { 
                user: user, 
                setUser: setUser,
                login: login
            }
        }
        >
            {children}
        </AuthContext.Provider>
    )
}