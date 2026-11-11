import React from "react";
import Link from "next/link";
import { Section } from "@/shared/ui/Section";
import { PersonCard } from "@/shared/ui/PersonCard";
import { programHeads } from "../data";

import styles from "./MasterTeachers.module.scss";

export const MasterTeachers = () => (
    <Section
        id="teachers"
        tone="lavender"
        title="Руководители программ"
        description="Ведущие учёные и эксперты факультета. Полный состав преподавателей — на странице каждой программы."
    >
        <div className={styles.grid}>
            {programHeads.map((head) => (
                <Link key={head.program.slug} href={`/master/${head.program.slug}#team`} className={styles.link}>
                    <PersonCard name={head.name} photo={head.photo} role={head.program.title} />
                </Link>
            ))}
        </div>
    </Section>
);
