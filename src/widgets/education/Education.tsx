import React from 'react';
import {Text} from "@/shared/Text";

import styles from './styles.module.scss';

export const Education = () => {
    const programs = [
        {
            title: "Бакалавриат",
            number: "01",
            count: "6 программ",
            description: "Все специализации тесно взаимосвязаны друг с другом. Поступив на факультет, вы сможете сами выбрать любое направление подготовки и построить собственный трек обучения",
            places: "165 мест",
            placesDetail: "(105 бюджет / 60 контракт)"
        },
        {
            title: "Магистратура",
            number: "02",
            count: "9 программ",
            description: "Продвинутые профессиональные знания и навыки в магистратуре откроют новые границы для вашего роста в карьере квалифицированного специалиста в науке и инженерии",
            places: "225 мест",
            placesDetail: "(120 бюджет / 105 контракт)"
        },
        {
            title: "Аспирантура",
            number: "03",
            count: "6 программ",
            description: "Третья ступень образования. Позволяет расширить свои знания, основательно углубиться в исследования и разработку новых технологий",
            places: "120 мест",
            placesDetail: "(80 бюджет / 40 контракт)"
        }
    ];

    return (
        <div className={styles.education}>
            <div className={styles.textGroup}>
                <Text as="h2" className={styles.title}>Образование</Text>
                <div className={styles.spacer}></div>
                <Text as="p" className={styles.description}>
                    Сможете пройти стажировку в лаборатории робототехники Сбербанка
                </Text>
            </div>
            <div className={styles.cardsContainer}>
                {programs.map((program, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <Text as="h4" className={styles.cardTitle}>{program.title}</Text>
                            <div className={styles.number}>{program.number}</div>
                        </div>
                        <div className={styles.spacerSmall}></div>
                        <Text as="p" className={styles.count}>{program.count}</Text>
                        <div className={styles.spacerMedium}></div>
                        <Text as="p" className={styles.cardDescription}>{program.description}</Text>
                        <div className={styles.spacerMedium}></div>
                        <div className={styles.footer}>
                            <div className={styles.places}>
                                <Text as="span" className={styles.placesCount}>{program.places}</Text>
                                <Text as="span" className={styles.placesDetail}>{program.placesDetail}</Text>
                            </div>
                            <div className={styles.arrow}>
                                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="#8A62D8"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.decorativeVector}></div>
        </div>
    );
};
