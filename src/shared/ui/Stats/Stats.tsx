import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type StatItem = { value: React.ReactNode; label: string };

export const Stats = ({ items, className }: { items: StatItem[]; className?: string }) => (
    <dl className={classNames(styles.stats, className)}>
        {items.map((item) => (
            <div key={item.label} className={styles.item}>
                <dt className={styles.label}>{item.label}</dt>
                <dd className={styles.value}>{item.value}</dd>
            </div>
        ))}
    </dl>
);
