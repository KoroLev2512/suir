import React from 'react';
import { Text } from "@/shared/Text";

import styles from './styles.module.scss';

export const WinterSchool = () => {
    return (
        <div className={styles.winterSchool}>
            <div className={styles.decorativeBackground}>
                {/* Will add decorative pixel elements in CSS */}
            </div>

            <div className={styles.dateBanner}>
                <div className={styles.dateBlock}>
                    <span className={styles.dateNumber}>29</span>
                    <span className={styles.dateMonth}>/ января /</span>
                    <span className={styles.dateSeparator}>—</span>
                    <span className={styles.dateNumber}>03</span>
                    <span className={styles.dateMonth}>/ февраля /</span>
                </div>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.leftSide}>
                    <div className={styles.robotContainer}>
                        <img src="/images/robot_winter.png" alt="Robot" className={styles.robot} />
                    </div>
                </div>

                <div className={styles.rightSide}>
                    <div className={styles.headerGroup}>
                        <Text as="h2" className={styles.title}>зимняя школа</Text>
                        <Text as="p" className={styles.subtitle}>
                            по робототехнике и системам управления
                        </Text>
                    </div>

                    <div className={styles.mainActionGroup}>
                        <div className={styles.headlineWithIcon}>
                            <svg className={styles.playIcon} width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <Text as="h1" className={styles.mainTitle}>
                                поступи<br />
                                в магистратуру<br />
                                без экзаменов
                            </Text>
                        </div>

                        <a href="https://roboschool.itmo.ru" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                            Зарегистрироваться
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
