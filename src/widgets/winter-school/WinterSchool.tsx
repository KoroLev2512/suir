import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import { externalLinks } from "@/shared/config/navigation";

import styles from "./styles.module.scss";

export const WinterSchool = () => {
    return (
        <section className={styles.winterSchool}>
            <div className={styles.inner}>
                <span className={styles.year} aria-hidden="true">2027</span>

                <div className={styles.dateBlock}>
                    <span className={styles.dateNumber}>январь</span>
                    <span className={styles.dateSeparator}>—</span>
                    <span className={styles.dateNumber}>февраль</span>
                </div>

                <div className={styles.content}>
                    <div className={styles.robot}>
                        <Image
                            src="/images/robot_winter.png"
                            alt=""
                            width={675}
                            height={670}
                            sizes="(max-width: 1024px) 70vw, 40vw"
                            className={styles.robotImage}
                        />
                    </div>

                    <div className={styles.text}>
                        <h2 className={styles.title}>зимняя школа</h2>
                        <p className={styles.subtitle}>по робототехнике и системам управления</p>
                        <p className={styles.mainTitle}>
                            <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span>поступи в&nbsp;магистратуру без&nbsp;экзаменов</span>
                        </p>
                        <Button href={externalLinks.winterSchool} withArrow>Зарегистрироваться</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
