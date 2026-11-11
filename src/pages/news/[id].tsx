import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { PageLayout } from "@/shared/ui/PageLayout";
import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";
import { getNewsById, getNewsExcerpt, newsList, NewsArticle, NewsCard } from "@/widgets/news";
import type { NewsItem } from "@/widgets/news";

import styles from "./article.module.scss";

type Props = { item: NewsItem; more: NewsItem[] };

const NewsArticlePage = ({ item, more }: Props) => (
    <PageLayout title={item.title} description={getNewsExcerpt(item)}>
        <NewsArticle item={item} />
        <Section tone="gray" title="Другие новости" aside={<Button href="/news" variant="secondary" withArrow>Все новости</Button>}>
            <div className={styles.more}>
                {more.map((news) => (
                    <NewsCard key={news.id} item={news} showExcerpt={false} />
                ))}
            </div>
        </Section>
    </PageLayout>
);

export const getStaticPaths: GetStaticPaths = () => ({
    paths: newsList.map((item) => ({ params: { id: item.id } })),
    fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
    const item = getNewsById(String(params?.id));
    if (!item) return { notFound: true };
    const more = newsList.filter((news) => news.id !== item.id).slice(0, 3);
    return { props: { item, more } };
};

export default NewsArticlePage;
