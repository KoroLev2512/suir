import React from 'react';
import Link from 'next/link';
import { Text } from "@/shared/Text";
import { projects } from "../data";
import styles from './ScienceProjects.module.scss';

export const ScienceProjects = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Text as="h2" className={styles.title}>Научные проекты</Text>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <Text as="h3" className={styles.cardTitle}>{project.title}</Text>
                                <span className={styles.cardId}>{project.id}</span>
                            </div>

                            <div className={styles.cardBody}>
                                <div className={styles.infoRow}>
                                    <span className={styles.label}>Руководитель:</span> {project.leader}
                                </div>
                                <Text as="p" className={styles.description}>{project.description}</Text>
                            </div>

                            <div className={styles.cardFooter}>
                                <div className={styles.dateRow}>
                                    <span className={styles.label}>Даты проведения:</span> {project.dates}
                                </div>
                                <Link href={project.link} className={styles.arrowLink}>
                                    &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
