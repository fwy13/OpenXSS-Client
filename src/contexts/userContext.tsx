import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

type User = {
    id: string;
    name: string;
    avatar: string;
};
type Response = {
    data: User;
};

type ContextUser = {
    IsUser: User | undefined;
    IsLoading: boolean;
    Error: boolean
};

export const UserContext = createContext<ContextUser>({
    IsUser: {
        id: "",
        name: "",
        avatar: "",
    },
    IsLoading: false,
    Error: false
});

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [IsUser, setIsUser] = useState<User>();
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const [Error, setError] = useState<boolean>(false);
    const GetUserData = async () => {
        setIsLoading(true);
        const data: Response = await axios.get(
            "https://openxss-server.onrender.com/user/discord",
            {
                withCredentials: true,
            }
        );
        if (data.data.id) {
            setIsUser(data.data);
            setIsLoading(false);
        } else {
            setError(true);
        }
    };
    useEffect(() => {
        GetUserData();
    }, []);
    return (
        <UserContext.Provider value={{ IsUser, IsLoading, Error }}>
            {children}
        </UserContext.Provider>
    );
}
