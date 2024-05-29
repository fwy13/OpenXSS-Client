import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/layout";
import Login from "../pages/Login";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);
export default routers;
