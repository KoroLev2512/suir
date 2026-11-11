import React from "react";
import Image from "next/image";
import classNames from "classnames";

import styles from "./styles.module.scss";

type PageHeroProps = {
    label?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
    /** Правая колонка: картинка или произвольный контент */
    image?: string;
    imageAlt?: string;
    aside?: React.ReactNode;
    /** photo — фото с тенью и обрезкой; cutout — картинка без фона целиком */
    imageVariant?: "photo" | "cutout";
    tone?: "lavender" | "white";
};

export const PageHero = ({ label, title, description, actions, image, imageAlt = "", aside, imageVariant = "photo", tone = "lavender" }: PageHeroProps) => {
    const hasSide = Boolean(image || aside);

    return (
        <section className={classNames(styles.hero, styles[tone])}>
            <div className={classNames(styles.inner, { [styles.withSide]: hasSide })}>
                <div className={styles.content}>
                    {label && <span className={styles.label}>{label}</span>}
                    <h1 className={styles.title}>{title}</h1>
                    {description && <div className={styles.description}>{description}</div>}
                    {actions && <div className={styles.actions}>{actions}</div>}
                </div>
                {image && (
                    <div className={classNames(styles.media, styles[imageVariant])}>
                        <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className={styles.image} />
                    </div>
                )}
                {!image && aside && <div className={styles.aside}>{aside}</div>}
            </div>
        </section>
    );
};
