import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Navigation } from "./Navigation";

import styles from "./styles.module.scss";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    // Закрываем меню при переходе на другую страницу
    useEffect(() => {
        const close = () => setIsOpen(false);
        router.events.on("routeChangeStart", close);
        return () => router.events.off("routeChangeStart", close);
    }, [router.events]);

    // Блокируем прокрутку страницы под открытым меню и закрываем по Escape
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [isOpen]);

    return (
        <header className={classNames(styles.header, { [styles.open]: isOpen })}>
            <div className={styles.content}>
                <Link href="/" className={styles.logoLink} aria-label="На главную">
                    {/* SVG-логотипы: оптимизация next/image для них не нужна */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/logo_black.svg" alt="ИТМО" className={styles.logoMain} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/label.svg" alt="Факультет систем управления и робототехники" className={styles.logoLabel} />
                </Link>

                <Navigation className={styles.desktopNav} />

                <button
                    type="button"
                    className={styles.burger}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                    onClick={() => setIsOpen((value) => !value)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div id="mobile-menu" className={styles.mobileMenu} hidden={!isOpen}>
                <Navigation className={styles.mobileNav} />
            </div>
        </header>
    );
};
