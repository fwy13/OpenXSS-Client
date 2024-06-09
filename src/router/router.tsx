import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/layout";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import Admin from "../pages/Admin";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "*", element: <Error404 /> },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
]);
export default routers;
