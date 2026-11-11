export type NewsItem = {
    id: string;
    title: string;
    category: string;
    /** Дата в формате ДД.ММ.ГГГГ */
    date: string;
    cover: string;
    gallery: string[];
    paragraphs: string[];
};
