import React from "react";
import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";
import { externalLinks } from "@/shared/config/navigation";
import { admissionSteps } from "../data";

import styles from "./MasterSteps.module.scss";

export const MasterSteps = () => (
    <Section tone="white" id="admission">
        <div className={styles.layout}>
            <div className={styles.header}>
                <h2 className={styles.title}>Этапы поступления</h2>
                <p className={styles.description}>
                    Стать студентом ИТМО — не так сложно, как кажется. Рассказываем, какие шаги нужно сделать, чтобы подать документы.
                </p>
                <div className={styles.actions}>
                    <Button href={externalLinks.abitMaster} withArrow>Перейти на abit.itmo</Button>
                    <Button href={externalLinks.masterRules} variant="secondary">Полные правила</Button>
                </div>
            </div>

            <ol className={styles.list}>
                {admissionSteps.map((step) => (
                    <li key={step.id} className={styles.item}>
                        <span className={styles.id}>{step.id}</span>
                        <div className={styles.content}>
                            <h3 className={styles.itemTitle}>{step.title}</h3>
                            {step.description && <p className={styles.itemDescription}>{step.description}</p>}
                        </div>
                        {step.action && (
                            <a href={step.action.href} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                                {step.action.label}
                            </a>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    </Section>
);
