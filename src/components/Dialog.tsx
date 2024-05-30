import React from "react";

type props = {
    title: string,
    content: string,
    id_modal: string
}


const Dialog: React.FC<props> = (props) => {
    return (
        <dialog id={props.id_modal} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{props.title}</h3>
                <p className="py-4">
                    {props.content}
                </p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Đóng</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};
export default Dialog;