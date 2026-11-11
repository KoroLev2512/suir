import React from "react";
import { Section } from "@/shared/ui/Section";
import { NewsCard, getNewsById } from "@/widgets/news";
import type { NewsItem } from "@/widgets/news";

import styles from "./styles.module.scss";

// Новости, которые показываем как достижения факультета
const ACHIEVEMENT_IDS = ["15", "14", "6"];

export const Achievements = () => {
    const items = ACHIEVEMENT_IDS.map(getNewsById).filter((item): item is NewsItem => Boolean(item));
    const [featured, ...rest] = items;

    return (
        <Section
            id="achievements"
            tone="lavender"
            title="Достижения"
            description="Наши выпускники — ведущие специалисты Сбера, Яндекса, РЖД, «Моторики», ЦНИИ «Электроприбор», АЛРОСА, StarLine, «Геоскана» и других инновационных компаний."
        >
            <div className={styles.grid}>
                {featured && <NewsCard item={featured} variant="featured" className={styles.featured} />}
                {rest.map((item) => (
                    <NewsCard key={item.id} item={item} showExcerpt={false} />
                ))}
            </div>
        </Section>
    );
};
