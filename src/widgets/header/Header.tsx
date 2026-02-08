import React from 'react';
import Link from 'next/link';
import { Navigation } from "./Navigation";

import styles from './styles.module.scss';


export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link href="/" passHref legacyBehavior>
                        <a className={styles.logoLink}>
                            <img
                                src='/icons/logo_black.svg'
                                alt="logo"
                            />
                            <img
                                src='/icons/label.svg'
                                alt="logo"
                            />
                        </a>
                    </Link>
                </div>
                <Navigation />
            </div>
        </div>
    );
};
