import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Home = () => {
    const { IsUser, IsLoading } = useContext(UserContext);
    return (
        <div>
            {IsLoading ? (
                <span className="loading loading-spinner text-info"></span>
            ) : (
                <div>
                    {IsUser?.name ? <span>user: {IsUser.name}</span> : ""}
                </div>
            )}
        </div>
    );
};
export default Home;
