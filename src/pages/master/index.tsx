import React from 'react';
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { WinterSchool } from "@/widgets/winter-school";
import { MasterHero } from "@/widgets/master/ui/MasterHero";
import { MasterTeachers } from "@/widgets/master/ui/MasterTeachers";
import { MasterSteps } from "@/widgets/master/ui/MasterSteps";

import styles from './styles.module.scss';

const MasterPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <MasterHero />
                <MasterTeachers />
                <MasterSteps />
                <WinterSchool />
            </main>
            <Footer />
        </div>
    );
};

export default MasterPage;
