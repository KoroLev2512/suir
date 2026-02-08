import React from "react";
import {IconProps} from "./types";

export const Arrival = ({height = 36, width = 126}: IconProps) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            width={width}
            height={height}
            fill="none"
        >
            <path
                  d="M0 24.5L7.07522 12.5H11.0632L18.1385 24.5H14.1762L9.06923 15.8396L3.96227 24.5H0ZM23.7761 24.5H27.2077V15.62H35.5416V12.5H23.7761V24.5ZM41.9145 24.5H45.3461V15.62H53.6799V12.5H41.9145V24.5ZM60.0529 12.5H63.4845V24.5H60.0529V12.5ZM116.674 12.5H113.243V24.5H125.008V21.38H116.674V12.5ZM78.1915 21.1604L73.0845 12.5H69.1221L76.1986 24.5H80.1844L87.2604 12.5H83.2983L78.1915 21.1604ZM89.4669 24.5L96.5429 12.5H100.529L107.605 24.5H103.643L98.5359 15.8396L93.429 24.5H89.4669Z"
                  fill="#6A6771"
            />

        </svg>
    );
};
