import React from 'react';
import { Text } from "@/shared/Text";
import { masterPrograms } from "../data";
import styles from './MasterHero.module.scss';

export const MasterHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.label}>ФАКУЛЬТЕТ РОБОТОТЕХНИКИ</div>
                    <Text as="h1" className={styles.title}>Магистратура</Text>
                    <div className={styles.descriptionRow}>
                        <Text as="p" className={styles.description}>
                            Факультет систем управления и робототехники готовит специалистов<br />
                            в области системного анализа и управления, робототехники и<br />
                            электротехники
                        </Text>
                        <div className={styles.subtitle}>
                            Лучшее образование по направлениям:<br />
                            Robotics and Control, Industrial Systems,<br />
                            Electrical Engineering, Mathematics
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.primaryBtn}>Подать документы &gt;</button>
                        <button className={styles.secondaryBtn}>Вступить в чат &gt;</button>
                    </div>
                </div>

                <div className={styles.grid}>
                    {masterPrograms.map((program) => (
                        <div key={program.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <Text as="h3" className={styles.cardTitle}>{program.title}</Text>
                                <span className={styles.cardId}>{program.id}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <Text as="p" className={styles.cardLabel}>Направление:</Text>
                                <Text as="p" className={styles.cardDescription}>{program.description}</Text>
                            </div>
                            <div className={styles.cardFooter}>
                                <a href={program.link} className={styles.cardLink}>Узнать подробнее &gt;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
