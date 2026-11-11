import React from "react";
import Image from "next/image";
import { Section } from "@/shared/ui/Section";
import { Accordion } from "@/shared/ui/Accordion";
import { Button } from "@/shared/ui/Button";
import { PersonCard } from "@/shared/ui/PersonCard";
import { Timeline } from "@/shared/ui/Timeline";
import { ValueCards } from "@/shared/ui/ValueCards";
import { externalLinks } from "@/shared/config/navigation";
import { aboutBlocks, admissionContacts, directions, keyDates, programTeam, scholarships } from "../data";

import styles from "./BachelorSections.module.scss";

export const BachelorAbout = () => (
    <Section
        id="about"
        title="О программе"
        description="Направления подготовки факультета тесно взаимосвязаны друг с другом, поэтому мы объединили их в одну образовательную программу — «Робототехника и искусственный интеллект»."
    >
        <div className={styles.aboutLayout}>
            <div className={styles.aboutPhoto}>
                <Image src="/images/csr/bachelor/about.webp" alt="Студенты факультета на полигоне с мобильными роботами" fill sizes="(max-width: 1024px) 100vw, 45vw" className={styles.cover} />
            </div>
            <dl className={styles.aboutList}>
                {aboutBlocks.map((block) => (
                    <div key={block.lead} className={styles.aboutItem}>
                        <dt>{block.lead}</dt>
                        <dd>{block.text}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </Section>
);

export const BachelorDirections = () => (
    <Section id="directions" tone="white" title="Направления подготовки" description="Количество мест указано на 2026 год.">
        <div className={styles.directions}>
            {directions.map((direction) => (
                <article key={direction.code} className={styles.direction}>
                    <span className={styles.code}>{direction.code}</span>
                    <h3 className={styles.directionTitle}>{direction.title}</h3>
                    <p className={styles.exams}>{direction.exams}</p>
                    <p className={styles.places}>{direction.places}</p>
                </article>
            ))}
        </div>
    </Section>
);

const admissionWays = [
    {
        id: "olympiads",
        title: "Олимпиады школьников",
        content: (
            <>
                <p>Победа или призёрство во Всероссийской олимпиаде школьников гарантирует поступление без результатов ЕГЭ (срок действия диплома — 4 года).</p>
                <p>Победа или призёрство в олимпиадах из перечня Российского совета олимпиад школьников позволяет поступить без вступительных испытаний или получить 100 баллов по предмету при подтверждении 75 баллами ЕГЭ по профильному предмету.</p>
                <p><a href={externalLinks.abitBachelor} target="_blank" rel="noopener noreferrer">Подробнее на abit.itmo.ru</a></p>
            </>
        ),
    },
    {
        id: "contests",
        title: "Конкурсы ITMO.STARS и KRONBARS.STARS",
        content: (
            <>
                <p><b>ITMO.STARS</b> — конкурс уникальных достижений для талантливых абитуриентов: победители учатся бесплатно, обучение оплачивает университет. Нужны минимальные баллы по вступительным испытаниям, аттестат и отсутствие высшего образования. <a href="https://stars.itmo.ru/" target="_blank" rel="noopener noreferrer">stars.itmo.ru</a></p>
                <p><b>KRONBARS.STARS</b> — конкурс спортивных достижений с теми же условиями бесплатного обучения. <a href="https://stars.kronbars.ru/" target="_blank" rel="noopener noreferrer">stars.kronbars.ru</a></p>
            </>
        ),
    },
    {
        id: "exams",
        title: "ЕГЭ или внутренние вступительные испытания",
        content: (
            <>
                <p>Рейтинг абитуриента — сумма баллов ЕГЭ по трём предметам и дополнительные баллы за индивидуальные достижения. Русский язык обязателен на всех направлениях, математика принимается только профильного уровня.</p>
                <p>Сдавать внутренние испытания ИТМО могут инвалиды, иностранные граждане, выпускники иностранных школ и поступающие на базе СПО.</p>
                <ul>
                    <li><a href="https://abit.itmo.ru/page/74" target="_blank" rel="noopener noreferrer">Перечень вступительных испытаний</a></li>
                    <li><a href="https://abit.itmo.ru/page/105" target="_blank" rel="noopener noreferrer">Программы испытаний и примеры заданий</a></li>
                </ul>
            </>
        ),
    },
    {
        id: "target",
        title: "Целевое обучение",
        content: (
            <>
                <p>Студенты-целевики гарантированно трудоустраиваются на предприятия оборонно-промышленного комплекса. Многие предприятия оплачивают проезд и общежитие и платят дополнительную стипендию.</p>
                <ul>
                    <li>Минимальный балл для участия в целевом наборе — 250 баллов ЕГЭ</li>
                    <li>Минимальная отработка на предприятии — 3 года</li>
                    <li>При нарушении договора — возмещение стоимости обучения</li>
                </ul>
                <p><a href="https://abit.itmo.ru/page/target_quota" target="_blank" rel="noopener noreferrer">Детализированная целевая квота</a></p>
            </>
        ),
    },
    {
        id: "quotas",
        title: "Особая и отдельная квоты",
        content: (
            <>
                <p>Право на поступление в пределах особой квоты имеют дети-сироты и дети, оставшиеся без попечения родителей, дети-инвалиды, инвалиды I и II групп, инвалиды с детства и ветераны боевых действий.</p>
                <p>Отдельная квота предусмотрена для Героев РФ, участников СВО и их детей. Полный перечень категорий и условий — на <a href={externalLinks.abitBachelor} target="_blank" rel="noopener noreferrer">abit.itmo.ru</a>.</p>
            </>
        ),
    },
    {
        id: "contract",
        title: "Контрактное обучение",
        content: (
            <>
                <p>Абитуриенты с минимальными баллами ЕГЭ могут участвовать в конкурсе на контрактное обучение. Стоимость фиксируется на весь период обучения, оплата — по семестрам (осенний — 55%, весенний — 45%). Студент, закрывший два семестра подряд на «хорошо» и «отлично», может перевестись на бюджет.</p>
                <p>Оплатить обучение можно физическим или юридическим лицом, материнским капиталом или образовательным кредитом.</p>
            </>
        ),
    },
];

export const BachelorAdmission = () => (
    <Section
        id="admission"
        title="Поступление"
        description="Выберите подходящий способ поступления."
        aside={<Button href={externalLinks.abitBachelor} withArrow>Перейти на abit.itmo</Button>}
    >
        <Accordion items={admissionWays} defaultOpen="olympiads" />
    </Section>
);

export const BachelorDates = () => (
    <Section id="dates" tone="lavender" title="Основные даты 2026">
        <Timeline items={keyDates} />
    </Section>
);

export const BachelorScholarships = () => (
    <Section
        id="scholarships"
        title="Стипендии ITMO.Family"
        description="Дополнительно — стипендия ЦНИИ «Электроприбор» до 11 000 ₽ за отличную учёбу и научную деятельность."
        aside={<Button href={externalLinks.abitBachelor} variant="secondary">Условия на abit.itmo</Button>}
    >
        <ValueCards items={scholarships} suffix="в год" />
    </Section>
);

export const BachelorTeam = () => (
    <Section id="team" tone="white" title="Команда образовательной программы">
        <div className={styles.team}>
            {programTeam.map((person) => (
                <PersonCard key={person.name} {...person} />
            ))}
        </div>
    </Section>
);

export const BachelorContacts = () => (
    <Section id="contacts" tone="gray" title="Остались вопросы?" description="Напишите или позвоните ответственным за приём в бакалавриат.">
        <div className={styles.contacts}>
            {admissionContacts.map((person) => (
                <PersonCard key={person.name} {...person} layout="horizontal" />
            ))}
        </div>
    </Section>
);
