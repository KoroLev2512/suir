import React from 'react';
import Link from "next/link";
import { Text } from "@/shared/Text";
import { Vk, Tg, Youtube, ItmoLogo } from "@/shared/lib/icons";

import styles from './styles.module.scss';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.university}>
                    <div className={styles.logo}>
                        <div className={styles.logoImage}>
                            <Link href="/" passHref legacyBehavior>
                                <a><ItmoLogo /></a>
                            </Link>
                        </div>
                        <Text as="p" className={styles.logoText}>
                            факультет систем управления и робототехники
                        </Text>
                    </div>
                    <div className={styles.spacer}></div>
                    <Text as="p" className={styles.copyright}>
                        © 1993-2023. Университет ИТМО. Политика по обработке персональных данных
                    </Text>
                    <div className={styles.spacerSmall}></div>
                    <Text as="p" className={styles.rules}>
                        Правила использования информации в доменной зоне <span className={styles.bold}>itmo.ru</span>
                    </Text>
                </div>
                <div className={styles.spacerHorizontal}></div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <a href="https://roboschool.itmo.ru" target="_blank" rel="noopener noreferrer">
                            <Text as="span">Зимняя школа</Text>
                        </a>
                    </div>
                    <div className={styles.spacerSmall}></div>
                    <Text as="p" className={styles.item}>Бакалавриат</Text>
                    <div className={styles.spacerSmall}></div>
                    <div className={styles.item}>
                        <Link href="/master" passHref legacyBehavior>
                            <Text as="a">Магистратура</Text>
                        </Link>
                    </div>
                    <div className={styles.spacerSmall}></div>
                    <Text as="p" className={styles.item}>Аспирантура</Text>
                    <div className={styles.spacerSmall}></div>
                    <div className={styles.item}>
                        <Link href="/science" passHref legacyBehavior>
                            <Text as="a">Наука</Text>
                        </Link>
                    </div>
                    <div className={styles.spacerSmall}></div>
                    <Text as="p" className={styles.item}>Новости</Text>
                </div>
                <div className={styles.spacerHorizontal}></div>
                <div className={styles.contacts}>
                    <div className={styles.info}>
                        <Text as="p" className={styles.contactTitle}>Контактная информация</Text>
                        <div className={styles.spacerSmall}></div>
                        <Text as="p" className={styles.contactText}>
                            Санкт-Петербург, Кронверкский проспект, 49
                        </Text>
                        <div className={styles.spacerSmall}></div>
                        <Text as="p" className={styles.contactText}>
                            +7 (812) 457-18-56
                        </Text>
                    </div>
                    <div className={styles.spacerLarge}></div>
                    <div className={styles.socialIcons}>
                        <div className={styles.icon}>
                            <Vk />
                        </div>
                        <div className={styles.icon}>
                            <Youtube />
                        </div>
                        <div className={styles.icon}>
                            <Tg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
