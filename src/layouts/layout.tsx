import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <span>Hello world from Layout</span>
            <Outlet />
        </div>
    )
}
export default Layout;