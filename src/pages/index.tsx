import React from 'react';
import { Header } from "@/widgets/header";
import { Banner } from "@/widgets/banner";
import { Info } from "@/widgets/info";
import { Education } from "@/widgets/education";
import { Achievements } from "@/widgets/achievements";
import { News } from "@/widgets/news";
import { Partners } from "@/widgets/partners";
import { WinterSchool } from "@/widgets/winter-school";
import { Footer } from "@/widgets/footer";

import styles from './styles.module.scss';

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <Banner />
                <Info />
                <Education />
                <Achievements />
                <News />
                <Partners />
                <WinterSchool />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
