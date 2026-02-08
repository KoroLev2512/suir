import React from 'react';
import { Text } from "@/shared/Text";
import { admissionSteps } from "../data";
import styles from './MasterSteps.module.scss';

export const MasterSteps = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Text as="h2" className={styles.title}>Этапы поступления</Text>
                    <Text as="p" className={styles.description}>
                        Поступление в магистратуру ИТМО — это просто. Изучите этапы<br />
                        и следуйте инструкциям, чтобы стать частью нашего университета.
                    </Text>
                    {/* Decorative starburst */}
                    <div className={styles.starburst}></div>
                </div>

                <div className={styles.list}>
                    {admissionSteps.map((step) => (
                        <div key={step.id} className={styles.item}>
                            <div className={styles.id}>{step.id}</div>
                            <div className={styles.content}>
                                <Text as="h4" className={styles.itemTitle}>{step.title}</Text>
                                {step.description && (
                                    <Text as="p" className={styles.itemDescription}>{step.description}</Text>
                                )}
                            </div>
                            {step.action && (
                                <button className={styles.actionBtn}>{step.action}</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
