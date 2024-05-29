import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./router/router.tsx";
import { UserProvider } from "./contexts/userContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <UserProvider>
        <RouterProvider router={routers} />
    </UserProvider>
);
