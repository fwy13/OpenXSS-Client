import axios from "axios";
import React, {
    createContext,
    useState,
    useEffect,
} from "react";

type User = {
    id: string;
    name: string;
    picture: {
        data: { url: string };
    };
};
type Response = {
    data: User;
};

type ContextUser = {
    IsUser: User | undefined;
    IsLoading: boolean;
};


export const UserContext = createContext<ContextUser>({
    IsUser: {
        id: "",
        name: "",
        picture: {
            data: {
                url: "",
            },
        },
    },
    IsLoading: false,
});

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [IsUser, setIsUser] = useState<User>();
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const GetUserData = async () => {
        setIsLoading(true)
        const data: Response = await axios.get(
            "https://openxss-server.onrender.com/user/me",
            {
                withCredentials: true,
            }
        );
        setIsUser(data.data);
        setIsLoading(false)
    };
    useEffect(() => {
        GetUserData();
    }, []);
    return (
        <UserContext.Provider value={{ IsUser, IsLoading }}>
            {children}
        </UserContext.Provider>
    );
}
