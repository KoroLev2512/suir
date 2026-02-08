import React from 'react';
import {Text} from "@/shared/Text";

import styles from './styles.module.scss';

export const Achievements = () => {
    const achievements = [
        {
            image: '/images/robot.png',
            text: 'Студенческая сборная Университета ИТМО одержала победу на крупнейших робототехнических соревнованиях Европы Robotex',
            size: 'small'
        },
        {
            image: '/images/robot.png',
            text: 'В Университете ИТМО создали прыгающего робота на основе морфологических принципов проектирования',
            size: 'medium'
        },
        {
            image: '/images/robot.png',
            text: '«Робот пригодится везде: от кафе и ресторанов до химической лаборатории» — интервью с разработчиком робота-манипулятора',
            size: 'medium'
        }
    ];

    return (
        <div className={styles.bkg}>
            <div className={styles.textGroup}>
                <Text as="h2" className={styles.title}>Достижения</Text>
                <div className={styles.spacer}></div>
                <Text as="p" className={styles.description}>
                    Наши выпусники работают в таких компаниях, как: IBM, Intel, Microsoft, Oracle, Dr. Web, Yandex, Cisco, National Inst
                </Text>
            </div>
            <div className={styles.cardGroup}>
                <div className={`${styles.card} ${styles.cardSmall}`}>
                    <div className={styles.cardImage}>
                        <img
                            src={achievements[0].image}
                            alt="Достижение 1"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.spacerCard}></div>
                    <Text as="p" className={styles.cardText}>{achievements[0].text}</Text>
                    <div className={styles.spacerCard}></div>
                    <div className={styles.arrow}>
                        <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="#8A62D8"/>
                        </svg>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.cardMedium}`} style={{ top: '0' }}>
                    <div className={styles.cardImage}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={achievements[1].image}
                                alt="Достижение 2"
                                className={styles.image}
                            />
                        </div>
                    </div>
                    <div className={styles.spacerCard}></div>
                    <Text as="p" className={styles.cardText}>{achievements[1].text}</Text>
                    <div className={styles.spacerCard}></div>
                    <div className={styles.arrow}>
                        <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="#8A62D8"/>
                        </svg>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.cardMedium}`} style={{ top: '336px' }}>
                    <div className={styles.cardImage}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={achievements[2].image}
                                alt="Достижение 3"
                                className={styles.image}
                            />
                        </div>
                    </div>
                    <div className={styles.spacerCard}></div>
                    <div className={styles.cardTextMulti}>
                        <Text as="p" className={styles.cardText} style={{ marginBottom: 0 }}>«Робот пригодится везде: от кафе </Text>
                        <Text as="p" className={styles.cardText}>и ресторанов до химической лаборатории» — интервью с разработчиком робота-манипулятора</Text>
                    </div>
                    <div className={styles.spacerCard}></div>
                    <div className={styles.arrow}>
                        <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="#8A62D8"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={styles.decorativeVector}></div>
        </div>
    );
};

