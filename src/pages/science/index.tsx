import React from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { PageHero } from "@/shared/ui/PageHero";
import { Button } from "@/shared/ui/Button";
import { ScienceFacts, ScienceLabs, ScienceProjects } from "@/widgets/science";

const SciencePage = () => (
    <PageLayout
        title="Наука"
        description="Научные проекты и лаборатории факультета систем управления и робототехники ИТМО."
    >
        <PageHero
            label="Факультет СУиР"
            title="Научная деятельность"
            description="Сотрудники факультета активно занимаются научной деятельностью. Около трети всех сотрудников занимают исключительно научные должности."
            actions={
                <>
                    <Button href="#labs" withArrow>Лаборатории</Button>
                    <Button href="#projects" variant="secondary">Проекты</Button>
                </>
            }
            aside={<ScienceFacts />}
        />
        <ScienceProjects />
        <ScienceLabs />
    </PageLayout>
);

export default SciencePage;
