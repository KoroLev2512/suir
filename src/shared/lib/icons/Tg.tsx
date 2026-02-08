import React from "react";
import { IconProps } from "./types";

export const Tg = ({ height = 22, width = 26, color = "#FBFBFB" }: IconProps) => {

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M25.9259 1.98503L22.0024 20.4885C21.7063 21.7944 20.9344 22.1194 19.8374 21.5042L13.8592 17.0989L10.9746 19.8732C10.6554 20.1925 10.3884 20.4594 9.77314 20.4594L10.2026 14.371L21.2826 4.3589C21.7644 3.9294 21.1782 3.69143 20.5339 4.12094L6.83627 12.7458L0.939315 10.9001C-0.343389 10.4996 -0.366605 9.61741 1.2063 9.00218L24.2718 0.116116C25.3397 -0.284366 26.2742 0.354084 25.9259 1.98503Z"
                fill={color}
            />
        </svg>
    );
};
