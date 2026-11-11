import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { mainNavigation } from "@/shared/config/navigation";

import styles from "./styles.module.scss";

export const Navigation = ({ className }: { className?: string }) => {
    const { pathname } = useRouter();

    return (
        <nav className={classNames(styles.nav, className)} aria-label="Основная навигация">
            {mainNavigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={classNames(styles.link, { [styles.active]: isActive })}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
};
