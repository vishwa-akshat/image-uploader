import React from "react";

import "./style.scss";

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
}
