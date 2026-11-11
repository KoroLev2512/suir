import React from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { PageHero } from "@/shared/ui/PageHero";
import { Button } from "@/shared/ui/Button";
import { externalLinks } from "@/shared/config/navigation";
import { PhdAchievements, PhdAdmission, PhdCouncils, PhdScholarships, PhdSpecialties } from "@/widgets/phd";

const PhdPage = () => (
    <PageLayout
        title="Аспирантура"
        description="Аспирантура факультета систем управления и робототехники ИТМО: научные специальности, диссертационные советы, сроки и условия поступления."
    >
        <PageHero
            label="Аспирантура"
            title="Аспирантура"
            description={
                <p>
                    Третья ступень образования: глубокое погружение в исследования и разработку новых технологий. С правилами приёма можно
                    ознакомиться на сайте Отдела международной аспирантуры и докторантуры ИТМО.
                </p>
            }
            actions={
                <>
                    <Button href={externalLinks.abitPhd} withArrow>Подать документы</Button>
                    <Button href="https://aspirantura.itmo.ru/?main=4" variant="secondary">Правила приёма</Button>
                </>
            }
            image="/images/csr/science/hero.webp"
            imageAlt="Аспиранты и студенты работают с оборудованием в лаборатории"
        />
        <PhdSpecialties />
        <PhdAdmission />
        <PhdCouncils />
        <PhdScholarships />
        <PhdAchievements />
    </PageLayout>
);

export default PhdPage;
