import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { PageLayout } from "@/shared/ui/PageLayout";
import { PageHero } from "@/shared/ui/PageHero";
import { Button } from "@/shared/ui/Button";
import { BackLink } from "@/shared/ui/BackLink";
import { Stats } from "@/shared/ui/Stats";
import { externalLinks } from "@/shared/config/navigation";
import { getProgramBySlug, masterPrograms, ProgramAbout, ProgramReviews, ProgramTeam } from "@/widgets/master";
import type { MasterProgram } from "@/widgets/master";
import { WinterSchool } from "@/widgets/winter-school";

import styles from "./program.module.scss";

type Props = { program: MasterProgram };

const ProgramPage = ({ program }: Props) => {
    const { stats } = program;

    return (
        <PageLayout title={program.title} description={program.about[0]}>
            <PageHero
                label="Магистратура"
                title={program.title}
                description={<BackLink href="/master">Все программы магистратуры</BackLink>}
                actions={
                    <>
                        <Button href={externalLinks.abitMaster} withArrow>Подать документы</Button>
                        <Button href={`mailto:${program.manager.email}`} variant="secondary">Связаться</Button>
                    </>
                }
                aside={
                    <Stats
                        className={styles.stats}
                        items={[
                            { value: stats.budget, label: "Бюджетных мест" },
                            { value: stats.contract, label: "Контрактных мест" },
                            { value: stats.target, label: "Целевых мест" },
                            { value: `${stats.years} года`, label: "Время учёбы" },
                            { value: `${stats.price} ₽`, label: "Стоимость контрактного обучения в год" },
                        ]}
                    />
                }
            />
            <ProgramAbout program={program} />
            <ProgramTeam program={program} />
            <ProgramReviews program={program} />
            <WinterSchool />
        </PageLayout>
    );
};

export const getStaticPaths: GetStaticPaths = () => ({
    paths: masterPrograms.map((program) => ({ params: { slug: program.slug } })),
    fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
    const program = getProgramBySlug(String(params?.slug));
    return program ? { props: { program } } : { notFound: true };
};

export default ProgramPage;
