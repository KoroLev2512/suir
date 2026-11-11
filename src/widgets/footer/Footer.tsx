import React from "react";
import Link from "next/link";
import { Vk, Tg, Youtube, ItmoLogo } from "@/shared/lib/icons";
import { externalLinks, facultyContacts, mainNavigation } from "@/shared/config/navigation";

import styles from "./styles.module.scss";

const socials = [
    { href: externalLinks.vk, label: "ВКонтакте", Icon: Vk },
    { href: externalLinks.youtube, label: "YouTube", Icon: Youtube },
    { href: externalLinks.telegram, label: "Telegram", Icon: Tg },
];

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.university}>
                    <Link href="/" className={styles.logo} aria-label="На главную">
                        <ItmoLogo />
                    </Link>
                    <p className={styles.logoText}>факультет систем управления и робототехники</p>
                    <div className={styles.legal}>
                        <a href={externalLinks.itmo} target="_blank" rel="noopener noreferrer">© 1993–{year} Университет ИТМО</a>
                        <a href={externalLinks.privacy} target="_blank" rel="noopener noreferrer">Политика по обработке персональных данных</a>
                        <a href={externalLinks.infoRules} target="_blank" rel="noopener noreferrer">
                            Правила использования информации в доменной зоне <b>itmo.ru</b>
                        </a>
                    </div>
                </div>

                <nav className={styles.links} aria-label="Разделы сайта">
                    <Link href="/">Главная</Link>
                    {mainNavigation.map((item) => (
                        <Link key={item.href} href={item.href}>{item.label}</Link>
                    ))}
                    <a href={externalLinks.winterSchool} target="_blank" rel="noopener noreferrer">Зимняя школа</a>
                </nav>

                <div className={styles.contacts}>
                    <p className={styles.contactTitle}>Контактная информация</p>
                    <p className={styles.contactText}>{facultyContacts.address}</p>
                    <a className={styles.contactText} href={`tel:${facultyContacts.phone.replace(/[^\d+]/g, "")}`}>
                        {facultyContacts.phone}
                    </a>
                    <div className={styles.socialIcons}>
                        {socials.map(({ href, label, Icon }) => (
                            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.icon}>
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
