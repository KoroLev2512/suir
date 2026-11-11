import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { ArrowIcon } from "@/shared/ui/ArrowIcon";
import { formatNewsDate, getNewsExcerpt, toIsoDate } from "../lib";
import type { NewsItem } from "../types";

import styles from "./NewsCard.module.scss";

type NewsCardProps = {
    item: NewsItem;
    variant?: "default" | "featured";
    showExcerpt?: boolean;
    className?: string;
};

export const NewsCard = ({ item, variant = "default", showExcerpt = true, className }: NewsCardProps) => (
    <Link href={`/news/${item.id}`} className={classNames(styles.card, styles[variant], className)}>
        <div className={styles.media}>
            <Image
                src={item.cover}
                alt=""
                fill
                sizes={variant === "featured" ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                className={styles.image}
            />
            <span className={styles.category}>{item.category}</span>
        </div>
        <div className={styles.body}>
            <time className={styles.date} dateTime={toIsoDate(item.date)}>{formatNewsDate(item.date)}</time>
            <h3 className={styles.title}>{item.title}</h3>
            {showExcerpt && <p className={styles.excerpt}>{getNewsExcerpt(item)}</p>}
            <ArrowIcon className={styles.arrow} />
        </div>
    </Link>
);
