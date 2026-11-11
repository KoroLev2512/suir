import React, { useState } from "react";
import classNames from "classnames";
import { newsList } from "../data";
import { newsCategories } from "../lib";
import { NewsCard } from "./NewsCard";

import styles from "./NewsFeed.module.scss";

const ALL = "Все";

export const NewsFeed = () => {
    const [category, setCategory] = useState(ALL);
    const visible = category === ALL ? newsList : newsList.filter((item) => item.category === category);

    return (
        <>
            <div className={styles.filters} role="group" aria-label="Категории новостей">
                {[ALL, ...newsCategories].map((item) => (
                    <button
                        key={item}
                        type="button"
                        className={classNames(styles.filter, { [styles.active]: category === item })}
                        aria-pressed={category === item}
                        onClick={() => setCategory(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className={styles.grid}>
                {visible.map((item) => (
                    <NewsCard key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};
