import React from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { Section } from "@/shared/ui/Section";
import { NewsFeed } from "@/widgets/news";

const NewsPage = () => (
    <PageLayout title="Новости" description="Новости, события и достижения факультета систем управления и робототехники ИТМО.">
        <Section
            title="Новости"
            description="Оставайтесь на связи с жизнью факультета: важные события, достижения студентов и преподавателей и предстоящие мероприятия."
        >
            <NewsFeed />
        </Section>
    </PageLayout>
);

export default NewsPage;
