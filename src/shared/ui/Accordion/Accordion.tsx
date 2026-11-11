import React from "react";

import styles from "./styles.module.scss";

export type AccordionItem = {
    id: string;
    title: string;
    content: React.ReactNode;
};

/** Аккордеон на нативном <details>: работает без JS и доступен с клавиатуры */
export const Accordion = ({ items, defaultOpen }: { items: AccordionItem[]; defaultOpen?: string }) => (
    <div className={styles.accordion}>
        {items.map((item) => (
            <details key={item.id} className={styles.item} open={item.id === defaultOpen}>
                <summary className={styles.summary}>
                    <span>{item.title}</span>
                    <span className={styles.icon} aria-hidden="true" />
                </summary>
                <div className={styles.content}>{item.content}</div>
            </details>
        ))}
    </div>
);
