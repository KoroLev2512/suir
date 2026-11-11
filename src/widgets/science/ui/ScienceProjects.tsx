import React from "react";
import { Section } from "@/shared/ui/Section";
import { projects } from "../data";

import styles from "./ScienceProjects.module.scss";

export const ScienceProjects = () => (
    <Section id="projects" title="Научные проекты">
        <div className={styles.grid}>
            {projects.map((project, index) => (
                <article key={project.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <span className={styles.cardId}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className={styles.leader}>
                        <span className={styles.label}>Руководитель:</span> {project.leader}
                    </p>
                    <p className={styles.description}>{project.description}</p>
                    <p className={styles.dates}>
                        <span className={styles.label}>Даты:</span> {project.dates}
                    </p>
                </article>
            ))}
        </div>
    </Section>
);
