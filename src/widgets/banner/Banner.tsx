import React from 'react';
import {Text} from "@/shared/Text";
import {QSIcon} from "@/shared/lib/icons";

import styles from './styles.module.scss';

export const Banner = () => {
    return (
        <div className={styles.bkg}>
            <div className={styles.backgroundGradient}></div>
            <div className={styles.robotImage}></div>
            <div className={styles.itmoLogo}>
                <img src="/images/ITMO.svg" alt="ITMO Logo" />
            </div>
            <div className={styles.qsContainer}>
                <QSIcon/>
                <p className={styles.qsText}>входит в топ 100 лучших университетов мира</p>
            </div>
            <div className={styles.titleContainer}>
                <Text as="h1" className={styles.title}>Факультет</Text>
                <Text as="h1" className={styles.title}>систем управления</Text>
                <Text as="h1" className={styles.title}>и робототехники</Text>
            </div>
        </div>
    );
};