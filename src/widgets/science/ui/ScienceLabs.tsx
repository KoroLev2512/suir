import React, { useState } from 'react';
import Link from 'next/link';
import { Text } from "@/shared/Text";
import { labs } from "../data";
import styles from './ScienceLabs.module.scss';
import classNames from "classnames";

export const ScienceLabs = () => {
    // Optional: Tab state if we want tabs, but let's do a list/grid first as per common designs
    // Design might show tabs "Лаборатория nonlinear...", "Силовая..."
    // Let's implement as a tabs system for better UX if the list is long, 
    // or just a list of cards if few. Data has 3.
    // Let's try a split view: List on left, Details on right, or simple cards.
    // Based on "Laboratory" header, let's do cards for now to be safe.

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Text as="h2" className={styles.title}>Лаборатория</Text>

                <div className={styles.grid}>
                    {labs.map((lab) => (
                        <div key={lab.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <Text as="h3" className={styles.cardTitle}>{lab.title}</Text>
                                <span className={styles.arrowIcon}>&nearr;</span>
                            </div>

                            <Text as="p" className={styles.description}>{lab.description}</Text>

                            <div className={styles.tasks}>
                                <Text as="h4" className={styles.tasksTitle}>ЗАДАЧИ</Text>
                                <ul className={styles.taskList}>
                                    {lab.tasks.map((task, i) => (
                                        <li key={i} className={styles.taskItem}>
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.footer}>
                                {/* Tabs for Projects/Publications could go here if interactive */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
