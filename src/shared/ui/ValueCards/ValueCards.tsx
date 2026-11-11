import React from "react";

import styles from "./styles.module.scss";

export type ValueCard = { title: string; amount: string; note?: string };

export const ValueCards = ({ items, suffix }: { items: ValueCard[]; suffix?: string }) => (
    <div className={styles.grid}>
        {items.map((item, index) => (
            <article key={`${item.title}-${index}`} className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.amount}>
                    {item.amount}
                    {suffix && <span className={styles.suffix}> {suffix}</span>}
                </p>
                {item.note && <p className={styles.note}>{item.note}</p>}
            </article>
        ))}
    </div>
);
