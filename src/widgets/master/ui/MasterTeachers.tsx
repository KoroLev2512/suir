import React from 'react';
import { Text } from "@/shared/Text";
import { teachers } from "../data";
import styles from './MasterTeachers.module.scss';

export const MasterTeachers = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Text as="h2" className={styles.title}>Преподаватели</Text>
                    <Text as="p" className={styles.description}>
                        Ведущие эксперты, трекеры и научные сотрудники
                    </Text>
                    {/* Decorative starburst can be CSS or SVG */}
                    <div className={styles.starburst}></div>
                </div>

                <div className={styles.grid}>
                    {teachers.map((teacher) => (
                        <div key={teacher.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={teacher.photo} alt={teacher.name} className={styles.photo} />
                            </div>
                            <div className={styles.info}>
                                <Text as="h4" className={styles.name}>{teacher.name}</Text>
                                <Text as="p" className={styles.role}>{teacher.role}</Text>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
