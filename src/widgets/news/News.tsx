import React from "react";
import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";
import { newsList } from "./data";
import { NewsCard } from "./ui/NewsCard";

import styles from "./styles.module.scss";

/** Блок свежих новостей для главной страницы */
export const News = () => {
    const latest = newsList.slice(0, 3);

    return (
        <Section
            id="news"
            title="Будь в курсе свежих новостей!"
            description="Важные события, достижения студентов и преподавателей и предстоящие мероприятия факультета."
            aside={<Button href="/news" variant="secondary" withArrow>Все новости</Button>}
        >
            <div className={styles.grid}>
                {latest.map((item) => (
                    <NewsCard key={item.id} item={item} />
                ))}
            </div>
        </Section>
    );
};
