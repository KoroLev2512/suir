import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { BackLink } from "@/shared/ui/BackLink";
import { formatNewsDate, toIsoDate } from "../lib";
import type { NewsItem } from "../types";

import styles from "./NewsArticle.module.scss";

const URL_RE = /(https?:\/\/[^\s]+)/g;

/** Превращает ссылки в тексте новости в кликабельные */
const Linkify = ({ text }: { text: string }) => (
    <>
        {text.split(URL_RE).map((part, index) => {
            if (!part.match(URL_RE)) return <React.Fragment key={index}>{part}</React.Fragment>;
            const url = part.replace(/[.,;:)]+$/, "");
            const tail = part.slice(url.length);
            return (
                <React.Fragment key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">{url.replace(/^https?:\/\//, "")}</a>
                    {tail}
                </React.Fragment>
            );
        })}
    </>
);

export const NewsArticle = ({ item }: { item: NewsItem }) => {
    const images = [item.cover, ...item.gallery];
    const [active, setActive] = useState(0);

    return (
        <article className={styles.article}>
            <div className={styles.inner}>
                <BackLink href="/news">Назад к новостям</BackLink>
                <div className={styles.meta}>
                    <span className={styles.category}>{item.category}</span>
                    <time dateTime={toIsoDate(item.date)}>{formatNewsDate(item.date)}</time>
                </div>
                <h1 className={styles.title}>{item.title}</h1>

                <figure className={styles.figure}>
                    <div className={styles.mainImage}>
                        <Image src={images[active]} alt={item.title} fill priority sizes="(max-width: 960px) 100vw, 880px" className={styles.image} />
                    </div>
                    {images.length > 1 && (
                        <div className={styles.thumbs}>
                            {images.map((src, index) => (
                                <button
                                    key={src}
                                    type="button"
                                    className={classNames(styles.thumb, { [styles.thumbActive]: index === active })}
                                    onClick={() => setActive(index)}
                                    aria-label={`Фото ${index + 1} из ${images.length}`}
                                    aria-pressed={index === active}
                                >
                                    <Image src={src} alt="" fill sizes="120px" className={styles.image} />
                                </button>
                            ))}
                        </div>
                    )}
                </figure>

                <div className={styles.body}>
                    {item.paragraphs.map((paragraph, index) => (
                        <p key={index}>
                            <Linkify text={paragraph} />
                        </p>
                    ))}
                </div>
            </div>
        </article>
    );
};
