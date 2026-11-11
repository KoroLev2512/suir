import React, { useState } from "react";
import classNames from "classnames";
import { Section } from "@/shared/ui/Section";
import { isEnglishProgram, masterPrograms } from "../data";
import { ProgramCard } from "./ProgramCard";

import styles from "./MasterPrograms.module.scss";

const filters = [
    { id: "all", label: "Все" },
    { id: "ru", label: "Программы на русском языке" },
    { id: "en", label: "Programs in English" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export const MasterPrograms = () => {
    const [filter, setFilter] = useState<FilterId>("all");

    const visible = masterPrograms
        .map((program, index) => ({ program, index }))
        .filter(({ program }) => filter === "all" || (filter === "en") === isEnglishProgram(program));

    return (
        <Section id="programs" title="Образовательные программы">
            <div className={styles.filters} role="group" aria-label="Фильтр программ">
                {filters.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className={classNames(styles.filter, { [styles.active]: filter === item.id })}
                        aria-pressed={filter === item.id}
                        onClick={() => setFilter(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className={styles.grid}>
                {visible.map(({ program, index }) => (
                    <ProgramCard key={program.slug} program={program} index={index} />
                ))}
            </div>
        </Section>
    );
};
