import React from "react";
import Head from "next/head";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

import styles from "./styles.module.scss";

const SITE_NAME = "Факультет систем управления и робототехники ИТМО";

type PageLayoutProps = {
    /** Заголовок страницы без названия сайта; пусто — только название сайта */
    title?: string;
    description?: string;
    children: React.ReactNode;
};

export const PageLayout = ({ title, description, children }: PageLayoutProps) => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>{fullTitle}</title>
                {description && <meta name="description" content={description} />}
                <meta property="og:title" content={fullTitle} />
                {description && <meta property="og:description" content={description} />}
            </Head>
            <a href="#main" className={styles.skip}>Перейти к содержанию</a>
            <Header />
            <main id="main" className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};
