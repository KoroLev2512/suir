import React from "react";
import { Diakont, Electropribor, Sber, Fenix } from "@/shared/lib/icons";

import styles from "./styles.module.scss";

export const Partners = () => {
    return (
        <section className={styles.partners} aria-label="Индустриальные партнёры">
            <p className={styles.label}>Индустриальные партнёры</p>
            <div className={styles.logos}>
                <Diakont />
                <Electropribor />
                <Sber />
                <Fenix />
            </div>
        </section>
    );
};
