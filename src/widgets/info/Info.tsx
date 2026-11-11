import React from "react";

import styles from "./styles.module.scss";

const facts = [
    { value: "700", text: "студентов ежегодно поступают на направления факультета" },
    { value: "280", text: "сотрудников, из которых 180 преподавателей и 100 научных сотрудников" },
    { value: "8", text: "образовательных программ: бакалавриат, магистратура и аспирантура" },
];

export const Info = () => {
    return (
        <section className={styles.info} aria-label="Факультет в цифрах">
            <ul className={styles.facts}>
                {facts.map((fact) => (
                    <li key={fact.value} className={styles.fact}>
                        <span className={styles.value}>{fact.value}</span>
                        <span className={styles.text}>{fact.text}</span>
                    </li>
                ))}
            </ul>
            <p className={styles.areas}>
                <span className={styles.areasLabel}>Научные и образовательные направления:</span>
                Robotics and Control / Industrial Systems / Electrical Engineering / Mathematics
            </p>
        </section>
    );
};
