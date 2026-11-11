import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Section } from "@/shared/ui/Section";
import { labs } from "../data";
import type { Lab } from "../data";

import styles from "./ScienceLabs.module.scss";

const LabGallery = ({ lab }: { lab: Lab }) => {
    const [active, setActive] = useState(0);

    return (
        <div className={styles.gallery}>
            <div className={styles.mainImage}>
                <Image src={lab.images[active]} alt={lab.title} fill sizes="(max-width: 1024px) 100vw, 45vw" className={styles.image} />
            </div>
            {lab.images.length > 1 && (
                <div className={styles.thumbs}>
                    {lab.images.map((src, index) => (
                        <button
                            key={src}
                            type="button"
                            className={classNames(styles.thumb, { [styles.thumbActive]: index === active })}
                            onClick={() => setActive(index)}
                            aria-label={`Фото ${index + 1}`}
                            aria-pressed={index === active}
                        >
                            <Image src={src} alt="" fill sizes="96px" className={styles.image} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export const ScienceLabs = () => (
    <Section id="labs" tone="gray" title="Лаборатории">
        <div className={styles.list}>
            {labs.map((lab) => (
                <article key={lab.id} id={lab.id} className={classNames(styles.lab, { [styles.withGallery]: lab.images.length > 0 })}>
                    {lab.images.length > 0 && <LabGallery lab={lab} />}
                    <div className={styles.content}>
                        <h3 className={styles.title}>{lab.title}</h3>
                        <p className={styles.description}>{lab.description}</p>
                        <div className={styles.head}>
                            <p className={styles.headName}>{lab.head.name}</p>
                            <p className={styles.headRole}>{lab.head.role}</p>
                            <div className={styles.headLinks}>
                                <a href={`mailto:${lab.head.email}`}>{lab.head.email}</a>
                                {lab.link && (
                                    <a href={lab.link.href} target="_blank" rel="noopener noreferrer">{lab.link.label}</a>
                                )}
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </Section>
);
