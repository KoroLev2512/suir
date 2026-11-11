import React from "react";
import Link from "next/link";
import { ArrowIcon } from "@/shared/ui/ArrowIcon";
import type { MasterProgram } from "../types";

import styles from "./ProgramCard.module.scss";

export const ProgramCard = ({ program, index }: { program: MasterProgram; index: number }) => (
    <Link href={`/master/${program.slug}`} className={styles.card}>
        <div className={styles.header}>
            <h3 className={styles.title}>{program.title}</h3>
            <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className={styles.body}>
            <p className={styles.label}>Направления:</p>
            <ul className={styles.directions}>
                {program.directions.map((direction) => (
                    <li key={direction}>{direction}</li>
                ))}
            </ul>
        </div>
        <div className={styles.footer}>
            <span className={styles.places}>{program.places}</span>
            <ArrowIcon className={styles.arrow} />
        </div>
    </Link>
);
