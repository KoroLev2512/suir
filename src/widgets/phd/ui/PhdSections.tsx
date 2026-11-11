import React from "react";
import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";
import { Timeline } from "@/shared/ui/Timeline";
import { ValueCards } from "@/shared/ui/ValueCards";
import { Accordion } from "@/shared/ui/Accordion";
import { ArrowIcon } from "@/shared/ui/ArrowIcon";
import { externalLinks } from "@/shared/config/navigation";
import { achievements, councils, keyDates, pointsLabel, scholarships, specialties, usefulLinks } from "../data";

import styles from "./PhdSections.module.scss";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export const PhdSpecialties = () => (
    <Section id="specialties" title="Научные специальности" description="Шесть групп научных специальностей, по которым факультет ведёт подготовку в аспирантуре.">
        <div className={styles.specialties}>
            {specialties.map((item) => (
                <article key={item.code} className={styles.specialty}>
                    <span className={styles.code}>{item.code}</span>
                    <h3 className={styles.specialtyTitle}>{item.title}</h3>
                    <div className={styles.links}>
                        <a href={item.passport} {...external}>Паспорт специальности</a>
                        <a href={item.abit} {...external}>На сайт приёма <ArrowIcon variant="short" /></a>
                    </div>
                </article>
            ))}
        </div>
    </Section>
);

export const PhdAdmission = () => (
    <Section id="admission" tone="white" title="Поступление">
        <div className={styles.admission}>
            <div>
                <h3 className={styles.subTitle}>Основные даты</h3>
                <Timeline items={keyDates} />
                <h3 className={styles.subTitle}>Вступительные испытания</h3>
                <div className={styles.text}>
                    <p>Экзамен по специальности и экзамен по иностранному языку проходят дистанционно и оцениваются по 5-балльной (специальность) и 3-балльной (иностранный язык) шкале. Для допуска к экзамену подайте документы через личный кабинет абитуриента.</p>
                    <p>Один из вопросов экзамена по специальности — предполагаемая тема диссертации. Подготовьте краткий план-проспект: цель и задачи исследования, методология, основные источники данных и литературы.</p>
                </div>
                <div className={styles.actions}>
                    <Button href={externalLinks.abitPhd} withArrow>Узнать больше на abit.itmo</Button>
                </div>
            </div>
            <aside className={styles.useful}>
                <h3 className={styles.subTitle}>Полезные ссылки</h3>
                <ul>
                    {usefulLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} {...external}>
                                <span>{link.label}</span>
                                <ArrowIcon variant="short" />
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    </Section>
);

export const PhdCouncils = () => (
    <Section id="councils" tone="lavender" title="Диссертационные советы">
        <div className={styles.councils}>
            {councils.map((council) => (
                <article key={council.title} className={styles.council}>
                    <h3 className={styles.specialtyTitle}>{council.title}</h3>
                    <ul>
                        {council.specialties.map((specialty) => (
                            <li key={specialty}>{specialty}</li>
                        ))}
                    </ul>
                    <Button href={council.href} variant="secondary" withArrow>Подробнее</Button>
                </article>
            ))}
        </div>
    </Section>
);

export const PhdScholarships = () => (
    <Section id="scholarships" title="Стипендии" aside={<Button href={externalLinks.abitPhd} variant="secondary">Условия на abit.itmo</Button>}>
        <ValueCards items={scholarships} suffix="в месяц" />
    </Section>
);

export const PhdAchievements = () => (
    <Section
        id="achievements"
        tone="white"
        title="Индивидуальные достижения"
        description="Не суммируются с баллами за вступительные испытания, но дают преимущество при равенстве баллов с другими абитуриентами."
    >
        <Accordion
            defaultOpen={achievements[0].group}
            items={achievements.map((group) => ({
                id: group.group,
                title: group.group,
                content: (
                    <ul className={styles.points}>
                        {group.items.map((item) => (
                            <li key={item.text}>
                                <span>{item.text}</span>
                                <b>{pointsLabel(item.points)}</b>
                            </li>
                        ))}
                    </ul>
                ),
            }))}
        />
    </Section>
);
