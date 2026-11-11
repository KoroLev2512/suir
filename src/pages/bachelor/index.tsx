import React from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { PageHero } from "@/shared/ui/PageHero";
import { Button } from "@/shared/ui/Button";
import { Stats } from "@/shared/ui/Stats";
import { Section } from "@/shared/ui/Section";
import { externalLinks } from "@/shared/config/navigation";
import {
    bachelorStats,
    BachelorAbout,
    BachelorAdmission,
    BachelorContacts,
    BachelorDates,
    BachelorDirections,
    BachelorScholarships,
    BachelorTeam,
} from "@/widgets/bachelor";

const BachelorPage = () => (
    <PageLayout
        title="Бакалавриат"
        description="Бакалавриат «Робототехника и искусственный интеллект» факультета систем управления и робототехники ИТМО: 6 направлений подготовки, 221 бюджетное место."
    >
        <PageHero
            label="Бакалавриат"
            title="Робототехника и искусственный интеллект"
            description="Единая образовательная программа факультета: два года общей базы, затем специализация — интеллектуальная робототехника, электроинженерия, цифровые технологии в индустрии или навигационные системы."
            actions={
                <>
                    <Button href={externalLinks.abitBachelor} withArrow>Подать документы</Button>
                    <Button href="#contacts" variant="secondary">Связаться</Button>
                </>
            }
            image="/images/csr/robot/bachelor.webp"
            imageAlt="Робот факультета"
            imageVariant="cutout"
        />
        <Section tone="white">
            <Stats items={bachelorStats} />
        </Section>
        <BachelorAbout />
        <BachelorDirections />
        <BachelorAdmission />
        <BachelorDates />
        <BachelorScholarships />
        <BachelorTeam />
        <BachelorContacts />
    </PageLayout>
);

export default BachelorPage;
