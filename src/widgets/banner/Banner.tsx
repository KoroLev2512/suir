import React from "react";
import Image from "next/image";
import { QSIcon } from "@/shared/lib/icons";
import { Button } from "@/shared/ui/Button";
import { externalLinks } from "@/shared/config/navigation";

import styles from "./styles.module.scss";

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.inner}>
                <div className={styles.box}>
                    <div className={styles.text}>
                        <div className={styles.qs}>
                            <QSIcon />
                            <p className={styles.qsText}>входит в топ-100 лучших университетов мира</p>
                        </div>
                        <h1 className={styles.title}>
                            Факультет систем управления и&nbsp;робототехники
                        </h1>
                        <p className={styles.subtitle}>Центр передовых знаний и технологий Университета ИТМО</p>
                        <div className={styles.actions}>
                            <Button href={externalLinks.abit} variant="light" withArrow>Подать заявку</Button>
                            <Button href="/contacts" variant="secondary" className={styles.contactBtn}>Связаться</Button>
                        </div>
                    </div>
                    <div className={styles.robot}>
                        <Image
                            src="/images/robot.png"
                            alt="Робот факультета"
                            width={1130}
                            height={696}
                            priority
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className={styles.robotImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
