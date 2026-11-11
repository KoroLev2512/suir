import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

type SectionProps = {
    id?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    /** Элемент справа от заголовка (кнопка, ссылка) */
    aside?: React.ReactNode;
    tone?: "white" | "gray" | "lavender" | "plain";
    className?: string;
    children?: React.ReactNode;
};

export const Section = ({ id, title, description, aside, tone = "plain", className, children }: SectionProps) => {
    return (
        <section id={id} className={classNames(styles.section, styles[tone], className)}>
            <div className={styles.inner}>
                {(title || description || aside) && (
                    <div className={styles.header}>
                        <div className={styles.heading}>
                            {title && <h2 className={styles.title}>{title}</h2>}
                            {description && <div className={styles.description}>{description}</div>}
                        </div>
                        {aside && <div className={styles.aside}>{aside}</div>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};
