import React from "react";
import { clsx } from "clsx";
import Marker from "./Marker";

function Button({ icon, children, href, onClick, markerfill }) {
    const inner = () => (
        <>
            <span className="relative flex items-center min-h-{600px} px-4 py-1 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                <span className="absolute -left-[0.5px]">
                    <Marker markerfill={markerfill} />
                </span>
                {icon && (
                    <img
                        src={icon}
                        alt="circle"
                        className="size-10 mr-5 object-contain z-10"
                    />
                )}

                <span className="relative font-poppins base-bold  text-p1 uppercase z-2">
                    {children}
                </span>
            </span>

            {/* //from index.css file */}
            <span className="glow-before glow-after" />
        </>
    );

    return href ? (
        <a
            className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group")}
            href={href}
        >
            {inner()}
        </a>
    ) : (
        <button
            className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group")}
            onClick={onClick}
        >
            {inner()}
        </button>
    );
}

export default Button;
