import { createContext, type PropsWithChildren, useEffect, useState } from "react"
import { users, type User } from '@/useContext/data/user-mock.data'

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    authStatus: AuthStatus;
    isAuthenticated: boolean;
    user: User | null;


    login: (id: number) => boolean;
    logOut: () => void;
}

export const UserContext = createContext({} as UserContextProps)

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {

        const user = users.find((user) => user.id === userId);

        if (!user) {
            console.log(`El usuario no existe ${userId}`);
            setUser(null);
            setAuthStatus('not-authenticated');
            return false
        }

        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());
        return true
    }

    const handleLogOut = () => {
        setAuthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('userId')
    }

    useEffect(() => {

        const storedUserId = localStorage.getItem('userId');

        if(storedUserId){
            handleLogin(+storedUserId)
            return
        }

        handleLogOut();
    },[])

    return (<UserContext value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === 'authenticated',
        user: user,
        login: handleLogin,
        logOut: handleLogOut
    }}>{children}</UserContext>)
}
