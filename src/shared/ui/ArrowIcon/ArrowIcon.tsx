import React from "react";

type ArrowIconProps = {
    className?: string;
    /** Длинная «фирменная» стрелка из макета или короткий шеврон */
    variant?: "long" | "short";
};

export const ArrowIcon = ({ className, variant = "long" }: ArrowIconProps) => {
    if (variant === "short") {
        return (
            <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    return (
        <svg className={className} width="41" height="16" viewBox="0 0 41 16" fill="none" aria-hidden="true">
            <path
                d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z"
                fill="currentColor"
            />
        </svg>
    );
};
