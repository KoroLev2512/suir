import React from "react";
import { Section } from "@/shared/ui/Section";
import { PersonCard } from "@/shared/ui/PersonCard";
import type { Person } from "@/shared/ui/PersonCard";
import { Vk, Tg, Youtube } from "@/shared/lib/icons";
import { externalLinks } from "@/shared/config/navigation";
import { admissionTeam, generalContacts, leadership } from "../data";

import styles from "./ContactsSections.module.scss";

const tel = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const ContactsGeneral = () => (
    <Section title="Контакты" description="Факультет систем управления и робототехники Университета ИТМО">
        <div className={styles.general}>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>По общим вопросам</span>
                    <a href={tel(generalContacts.phone)} className={styles.infoValue}>{generalContacts.phone}</a>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Адрес</span>
                    <span className={styles.infoValue}>{generalContacts.address}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Мы в соцсетях</span>
                    <div className={styles.socials}>
                        <a href={externalLinks.vk} target="_blank" rel="noopener noreferrer"><Vk color="currentColor" /> ВКонтакте</a>
                        <a href={externalLinks.telegram} target="_blank" rel="noopener noreferrer"><Tg color="currentColor" /> Telegram</a>
                        <a href={externalLinks.youtube} target="_blank" rel="noopener noreferrer"><Youtube color="currentColor" /> YouTube</a>
                    </div>
                </div>
            </div>
            <div className={styles.map}>
                <iframe
                    title="Университет ИТМО на карте: Кронверкский проспект, 49"
                    src="https://yandex.ru/map-widget/v1/?text=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%9A%D1%80%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D0%BA%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%2049&z=16"
                    loading="lazy"
                    allowFullScreen
                />
            </div>
        </div>
    </Section>
);

const PeopleGrid = ({ people }: { people: Person[] }) => (
    <div className={styles.people}>
        {people.map((person) => (
            <PersonCard key={person.name} {...person} layout="horizontal" />
        ))}
    </div>
);

export const ContactsLeadership = () => (
    <Section tone="lavender" title="Руководство факультета" description="Санкт-Петербург, Кронверкский пр., д. 49">
        <PeopleGrid people={leadership} />
    </Section>
);

export const ContactsAdmission = () => (
    <Section tone="white" title="Приёмная кампания">
        <PeopleGrid people={admissionTeam} />
    </Section>
);
