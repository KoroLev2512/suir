import React, { useState } from "react";
import classNames from "classnames";
import { Section } from "@/shared/ui/Section";
import { PersonCard } from "@/shared/ui/PersonCard";
import type { MasterProgram, ProgramReview } from "../types";

import styles from "./ProgramDetails.module.scss";

const TEAM_PREVIEW = 8;

export const ProgramAbout = ({ program }: { program: MasterProgram }) => (
    <Section id="about" title="О программе">
        <div className={styles.aboutLayout}>
            <div className={styles.about}>
                {program.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>

            <aside className={styles.aside}>
                <div className={styles.asideBlock}>
                    <h3 className={styles.asideTitle}>Направления подготовки</h3>
                    <ul className={styles.plainList}>
                        {program.directions.map((direction) => (
                            <li key={direction}>{direction}</li>
                        ))}
                    </ul>
                </div>

                {program.examDates.length > 0 && (
                    <div className={styles.asideBlock}>
                        <h3 className={styles.asideTitle}>Даты вступительного экзамена</h3>
                        <ul className={styles.dates}>
                            {program.examDates.map((date) => (
                                <li key={date}>{date}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className={styles.asideBlock}>
                    <h3 className={styles.asideTitle}>Менеджер программы</h3>
                    <PersonCard {...program.manager} layout="horizontal" className={styles.manager} />
                </div>
            </aside>
        </div>
    </Section>
);

export const ProgramTeam = ({ program }: { program: MasterProgram }) => {
    const [expanded, setExpanded] = useState(false);
    const members = expanded ? program.team : program.team.slice(0, TEAM_PREVIEW);

    return (
        <Section id="team" tone="lavender" title="Команда образовательной программы">
            <div className={styles.teamGrid}>
                {members.map((member) => (
                    <PersonCard key={member.name} {...member} badge={member.isHead ? "Руководитель программы" : undefined} />
                ))}
            </div>
            {program.team.length > TEAM_PREVIEW && (
                <button type="button" className={styles.more} onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
                    {expanded ? "Свернуть" : `Показать всех (${program.team.length})`}
                </button>
            )}
        </Section>
    );
};

const ReviewCard = ({ review }: { review: ProgramReview }) => {
    const [open, setOpen] = useState(false);
    const isLong = review.text.join(" ").length > 420;

    return (
        <figure className={styles.review}>
            <blockquote className={classNames(styles.quote, { [styles.clamped]: isLong && !open })}>
                {review.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </blockquote>
            {isLong && (
                <button type="button" className={styles.readMore} onClick={() => setOpen((value) => !value)} aria-expanded={open}>
                    {open ? "Свернуть" : "Читать полностью"}
                </button>
            )}
            <figcaption className={styles.author}>
                <b>{review.name}</b>
                <span>{review.meta}</span>
            </figcaption>
        </figure>
    );
};

export const ProgramReviews = ({ program }: { program: MasterProgram }) => {
    if (program.reviews.length === 0) return null;

    return (
        <Section id="reviews" tone="white" title="Отзывы выпускников">
            <div className={styles.reviews}>
                {program.reviews.map((review) => (
                    <ReviewCard key={review.name} review={review} />
                ))}
            </div>
        </Section>
    );
};
