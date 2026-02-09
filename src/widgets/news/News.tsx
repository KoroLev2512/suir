import React from 'react';
import {Text} from "@/shared/Text";

import styles from './styles.module.scss';

export const News = () => {
    const news = [
        {
            image: '/images/robot.png',
            text: 'Студенческая сборная Университета ИТМО одержала победу на крупнейших робототехнических соревнованиях Европы Robotex'
        },
        {
            image: '/images/robot.png',
            text: 'В Университете ИТМО создали прыгающего робота на основе морфологических принципов проектирования'
        },
        {
            image: '/images/robot.png',
            text: '«Робот пригодится везде: от кафе и ресторанов до химической лаборатории» — интервью с разработчиком робота-манипулятора'
        }
    ];

    return (
        <div className={styles.news}>
            <div className={styles.newsInner}>
            <div className={styles.textGroup}>
                <Text as="h2" className={styles.title}>Новости</Text>
                <div className={styles.spacer}></div>
                <div className={styles.description}>
                    <Text as="p" className={styles.descriptionText}>
                        Будьте в курсе всех актуальных новостей
                    </Text>
                    <Text as="p" className={styles.descriptionText}>
                        и событий из жизни факультета
                    </Text>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img
                            src={news[0].image}
                            alt="Новость 1"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <Text as="p" className={styles.cardText}>{news[0].text}</Text>
                        <div className={styles.arrow}>
                            <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="#8A62D8"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    {news.slice(1).map((item, index) => (
                        <div key={index + 1} className={styles.card}>
                            <div className={styles.cardImage}>
                                <img
                                    src={item.image}
                                    alt={`Новость ${index + 2}`}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <Text as="p" className={styles.cardText}>{item.text}</Text>
                                <div className={styles.arrow}>
                                    <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="#8A62D8"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.decorativeVector}></div>
            </div>
        </div>
    );
};
