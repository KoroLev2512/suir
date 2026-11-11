import React from "react";
import { scienceFacts } from "../data";

import styles from "./ScienceFacts.module.scss";

export const ScienceFacts = () => (
    <ul className={styles.facts}>
        {scienceFacts.map((fact) => (
            <li key={fact.value} className={styles.fact}>
                <span className={styles.value}>{fact.value}</span>
                <span className={styles.text}>{fact.text}</span>
            </li>
        ))}
    </ul>
);
