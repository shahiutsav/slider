import React, { MouseEventHandler } from "react";
import style from "./slider.module.css";

const NavigationButton = ({
    title,
    color,
    onClick,
    isActive,
}: {
    title: string;
    color: string;
    onClick: MouseEventHandler;
    isActive: boolean;
}) => {
    return (
        <li
            className={`flex flex-col items-center gap-5 ${
                isActive ? style.activeButton : ""
            }`}
            onClick={onClick}
        >
            <div className={`${style.buttonBox} border border-${color}-400`}>
                <button className={style.icon}>Hover</button>
                <div className={`${style.customBorder} bg-${color}-400`}></div>
                <div className={`${style.customBorder} bg-${color}-400`}></div>
                <div className={`${style.customBorder} bg-${color}-400 `}></div>
                <div className={`${style.customBorder} bg-${color}-400`}></div>
            </div>
            <h3>{title}</h3>
        </li>
    );
};

export default NavigationButton;
