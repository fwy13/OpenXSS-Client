import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";


const Login = () => {
    const [IsCode, setIsCode] = useState<string>("");
    
    useEffect(() => {
        setIsCode("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }, []);
    return (
        <main className="flex flex-col items-center p-5 w-full bg-[url('https://images.unsplash.com/photo-1534351590666-13e3e96b5017')] bg-no-repeat bg-cover h-screen">
            <div className="bg-white p-5 w-[360px] rounded mt-5">
                <h1 className="text-black font-bold text-xl text-center">
                    Đăng nhập
                </h1>
                <div className="divider"></div>
                <div className="flex flex-col items-center">
                    <div className="card">
                        <div className="flex justify-center">
                            <QRCodeCanvas
                                value={IsCode}
                                size={150}
                                level={"Q"}
                            />
                        </div>
                        <div className="p-2 card-body items-center text-center">
                            <p>
                                Quét mã trên với thiết bị đã đăng nhập tài
                                khoản.
                            </p>
                            <div className="card-actions">
                                <button className="btn btn-primary text-white">
                                    Làm mới mã
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="divider">Hoặc</div>
                    <div className="flex gap-2 justify-center w-full">
                        <Link
                            to={"https://openxss-server.onrender.com/discord/login"}
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
