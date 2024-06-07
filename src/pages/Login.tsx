import { Link } from "react-router-dom";

const Login = () => {
    return (
        <main className="flex flex-col items-center p-5 w-full bg-[url('https://images.unsplash.com/photo-1534351590666-13e3e96b5017')] bg-no-repeat bg-cover h-screen">
            <div className="bg-white p-5 w-[360px] h-auto rounded mt-8">
                <h1 className="text-black font-bold text-xl text-center">
                    Đăng nhập
                </h1>
                <div className="divider"></div>
                <div className="flex flex-col items-center">
                    <div className="card-actions">
                      
                    </div>
                    <div className="flex gap-2 justify-center w-full">
                        <Link
                            to={"http://192.168.1.7:8080/discord/login"}
                            className="btn btn-primary text-white w-full"
                        >
                            <button>Discord</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Login;
