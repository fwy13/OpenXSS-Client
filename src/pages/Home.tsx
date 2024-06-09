
const Home = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <h1 className="text-[1.5em] text-info mb-2">Tổng quan</h1>
            <div className="grid grid-cols-1 grid-rows-2 gap-3 lg:grid-cols-2 xl:grid-cols-3">
                <div className="stat shadow-lg w-96">
                    <div className="stat-figure text-secondary ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="stat-title">Lượt đi đúng giờ</div>
                    <div className="stat-value text-secondary">13</div>
                    <div className="stat-desc">Lần cuối: 6h30 - T6, 23/5</div>
                </div>
                <div className="stat shadow-lg w-96">
                    <div className="stat-figure text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="stat-title">Lượt đi trễ giờ</div>
                    <div className="stat-value text-primary">10</div>
                    <div className="stat-desc">Lần cuối: 7h30 - T6, 18/5</div>
                </div>
                <div className="stat shadow-lg w-96">
                    <div className="stat-figure text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="stat-title">Chưa điểm danh</div>
                    <div className="stat-value text-primary">0</div>
                    <div className="stat-desc">Lần cuối: chưa có</div>
                </div>
                <div className="stat shadow-lg w-96">
                    <div className="stat-figure text-secondary">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="stat-value">56%</div>
                    <div className="stat-title">Đi đúng giờ</div>
                    <div className="stat-desc text-secondary text-[15px]">
                        23 lượt điểm danh
                    </div>
                </div>
                <div className="stat shadow-lg w-96">
                    <div className="stat-figure text-primary">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="stat-value">44%</div>
                    <div className="stat-title">Đi trễ giờ</div>
                    <div className="stat-desc text-primary text-[15px]">
                        23 lượt điểm danh
                    </div>
                </div>
                <div className="stat shadow-lg w-96">
                    <div className="stat-figure text-primary">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="stat-value">0%</div>
                    <div className="stat-title">Chưa điểm danh</div>
                    <div className="stat-desc text-primary text-[15px]">
                        23 lượt điểm danh
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
