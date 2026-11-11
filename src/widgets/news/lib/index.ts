import { newsList } from "../data";
import type { NewsItem } from "../types";

export const getNewsById = (id: string): NewsItem | undefined => newsList.find((item) => item.id === id);

export const getNewsExcerpt = (item: NewsItem, length = 160): string => {
    const text = item.paragraphs.join(" ").replace(/\s+/g, " ").trim();
    return text.length > length ? `${text.slice(0, length).replace(/\s+\S*$/, "")}…` : text;
};

export const newsCategories = Array.from(new Set(newsList.map((item) => item.category)));

const MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

/** 21.09.2026 → «21 сентября 2026» */
export const formatNewsDate = (date: string): string => {
    const [day, month, year] = date.split(".").map(Number);
    return `${day} ${MONTHS[month - 1]} ${year}`;
};

/** 21.09.2026 → 2026-09-21 для атрибута datetime */
export const toIsoDate = (date: string): string => date.split(".").reverse().join("-");
