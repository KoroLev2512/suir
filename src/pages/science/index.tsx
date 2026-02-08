import React from 'react';
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { ScienceHero } from "@/widgets/science/ui/ScienceHero";
import { ScienceProjects } from "@/widgets/science/ui/ScienceProjects";
import { ScienceLabs } from "@/widgets/science/ui/ScienceLabs";

import styles from './styles.module.scss';

const SciencePage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <ScienceHero />
                <ScienceProjects />
                <ScienceLabs />
            </main>
            <Footer />
        </div>
    );
};

export default SciencePage;
