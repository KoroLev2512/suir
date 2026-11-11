import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { ArrowIcon } from "../ArrowIcon";

import styles from "./styles.module.scss";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "light";
    withArrow?: boolean;
    className?: string;
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export const Button = ({ href, children, variant = "primary", withArrow = false, className }: ButtonProps) => {
    const classes = classNames(styles.button, styles[variant], className);
    const content = (
        <>
            <span>{children}</span>
            {withArrow && <ArrowIcon variant="short" className={styles.arrow} />}
        </>
    );

    if (isExternal(href)) {
        const newTab = href.startsWith("http");
        return (
            <a href={href} className={classes} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={classes}>
            {content}
        </Link>
    );
};
