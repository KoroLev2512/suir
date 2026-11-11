import React from "react";

import styles from "./styles.module.scss";

export type TimelineItem = { date: string; text: React.ReactNode };

export const Timeline = ({ items }: { items: TimelineItem[] }) => (
    <ol className={styles.timeline}>
        {items.map((item, index) => (
            <li key={index} className={styles.item}>
                <span className={styles.date}>{item.date}</span>
                <span className={styles.text}>{item.text}</span>
            </li>
        ))}
    </ol>
);
