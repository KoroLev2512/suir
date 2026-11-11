import React from "react";
import Link from "next/link";
import { Section } from "@/shared/ui/Section";
import { ArrowIcon } from "@/shared/ui/ArrowIcon";

import styles from "./styles.module.scss";

const levels = [
    {
        href: "/bachelor",
        title: "Бакалавриат",
        number: "01",
        count: "1 программа",
        description: "Все специализации тесно взаимосвязаны друг с другом. Поступив на факультет, вы сможете сами выбрать любое направление подготовки и построить собственный трек обучения",
        places: "267 мест",
        placesDetail: "141 бюджет / 126 контракт",
    },
    {
        href: "/master",
        title: "Магистратура",
        number: "02",
        count: "6 программ",
        description: "Продвинутые профессиональные знания и навыки в магистратуре откроют новые границы для вашего роста в карьере квалифицированного специалиста в науке и инженерии",
        places: "343 места",
        placesDetail: "218 бюджет / 125 контракт",
    },
    {
        href: "/phd",
        title: "Аспирантура",
        number: "03",
        count: "6 программ",
        description: "Третья ступень образования. Позволяет расширить свои знания, основательно углубиться в исследования и разработку новых технологий",
        places: "312 мест",
        placesDetail: "252 бюджет / 60 контракт",
    },
];

export const Education = () => {
    return (
        <Section
            id="education"
            tone="gray"
            title="Фундаментальное техническое образование"
            description="Мы готовим высококвалифицированных специалистов в области робототехники, систем автоматического управления, электроэнергетики, навигационных систем, мехатроники и приборостроения."
        >
            <div className={styles.cards}>
                {levels.map((level) => (
                    <Link key={level.href} href={level.href} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>{level.title}</h3>
                            <span className={styles.number}>{level.number}</span>
                        </div>
                        <p className={styles.count}>{level.count}</p>
                        <p className={styles.description}>{level.description}</p>
                        <div className={styles.footer}>
                            <p className={styles.places}>
                                <b>{level.places}</b>
                                <span>{level.placesDetail}</span>
                            </p>
                            <ArrowIcon className={styles.arrow} />
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
};
