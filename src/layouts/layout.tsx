/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import Dialog from "../components/Dialog";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = () => {
    const { IsUser, Error, IsLoading } = useContext(UserContext);
    const navigate = useNavigate();

    const changeTheme = ({ theme }: { theme: string }) => {
        localStorage.setItem("theme", theme);
    };

    const setThemeReload = () => {
        const getTheme: string = localStorage.getItem("theme") ?? "";
        const Themes = document.querySelectorAll(".themes > li");
        Themes.forEach((item) => {
            const CheckThemeinEl = item.innerHTML.includes(getTheme);
            if (CheckThemeinEl) {
                item.setAttribute("class", "bg-primary");
                document
                    .querySelector("html")
                    ?.setAttribute("data-theme", getTheme);
            }
        });
    };

    useEffect(() => {
        setThemeReload();
    }, []);

    useEffect(() => {
        if (Error) {
            navigate("/login");
        }
    }, [Error]);

    const ListTheme: string[] = [
        "light",
        "dark",
        "aqua",
        "pastel",
        "dracula",
        "cmyk",
        "autumn",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "cupcake",
        "bumblebee",
        "emerald",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
    ];
    return (
        <div>
            <div className="drawer fixed top-0">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <header className="flex items-center shadow-lg justify-between w-full p-2 gap-3">
                        <div className="flex items-center">
                            <label
                                htmlFor="my-drawer"
                                className="btn btn-square drawer-button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </label>

                            <img
                                src="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg"
                                className="w-8 h-8"
                            />
                            <span className="text-base-content text-lg md:text-2xl">
                                OpenXSS
                            </span>
                        </div>

                        <div className="flex w-full justify-end items-center gap-2">
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn m-1"
                                >
                                    Chủ đề
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 themes"
                                >
                                    {ListTheme.map(
                                        (theme: string, index: number) => (
                                            <li key={index}>
                                                <input
                                                    type="radio"
                                                    name="theme-dropdown"
                                                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                    aria-label={theme.toUpperCase()}
                                                    value={theme}
                                                    onClick={() => {
                                                        changeTheme({ theme });
                                                    }}
                                                />
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            {Error || IsLoading ? (
                                <span className="loading loading-spinner loading-lg"></span>
                            ) : (
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="avatar btn btn-circle"
                                    >
                                        <div className="w-10 h-10 rounded-full">
                                            <img
                                                src={`https://cdn.discordapp.com/avatars/${IsUser?.id}/${IsUser?.avatar}.png`}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52 flex flex-col justify-center items-center"
                                    >
                                        <div className="avatar">
                                            <div className="w-14 rounded-full">
                                                <img
                                                    src={`https://cdn.discordapp.com/avatars/${IsUser?.id}/${IsUser?.avatar}.png`}
                                                />
                                            </div>
                                        </div>
                                        <h1 className="text-base-content text-lg mt-2">
                                            {IsUser?.name}
                                        </h1>
                                        <div className="divider my-0"></div>
                                        <button
                                            className="btn btn-sm btn-block btn-ghost rounded"
                                            onClick={() => {
                                                const el: any =
                                                    document.getElementById(
                                                        "tb-user-1"
                                                    );
                                                el.showModal();
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                                />
                                            </svg>
                                            Thông báo
                                        </button>
                                        <Dialog
                                            title="Thông báo"
                                            content="Hiện bạn không có thông báo nào."
                                            id_modal="tb-user-1"
                                        />
                                        <button
                                            onClick={() => {
                                                navigate("/login-scan-qr");
                                            }}
                                            className="btn btn-sm btn-block btn-ghost rounded"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
                                                />
                                            </svg>
                                            QR đăng nhập
                                        </button>
                                        <Link
                                            to={
                                                "http://localhost:3000/logout"
                                            }
                                            className="btn btn-sm btn-block btn-ghost rounded"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                                                />
                                            </svg>
                                            Đăng xuất
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </header>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    />
                    <div className="menu p-2 w-56 min-h-full bg-base-200 text-base-content">
                        <div className="flex justify-center gap-2">
                            <img
                                src="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg"
                                className="w-8 h-8"
                            />
                            <span className="text-base-content text-lg md:text-2xl">
                                OpenXSS
                            </span>
                        </div>
                        <div className="divider mb-0"></div>
                        <main className="flex flex-col gap-2">
                            <Link to={"/"}>
                                <div className="flex w-full btn text-md shadow p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6"
                                    >
                                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                    </svg>
                                    Nhà
                                </div>
                            </Link>
                            <Link to={"school"}>
                                <div className="flex w-full btn text-md shadow p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6"
                                    >
                                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                                    </svg>
                                    Trường
                                </div>
                            </Link>
                            <div className="absolute bottom-5 flex flex-col justify-center items-center w-full">
                                <Link
                                    to={"/about"}
                                    className="w-full text-center link"
                                >
                                    Về chúng tôi
                                </Link>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <div className="mt-[70px] p-2">
                <motion.article
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.4, type: "easeInOut" }}
                >
                    <Outlet />
                </motion.article>
            </div>
        </div>
    );
};
export default Layout;
