import React from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { PageHero } from "@/shared/ui/PageHero";
import { Button } from "@/shared/ui/Button";
import { externalLinks } from "@/shared/config/navigation";
import { MasterPrograms, MasterSteps, MasterTeachers } from "@/widgets/master";
import { WinterSchool } from "@/widgets/winter-school";

const MasterPage = () => (
    <PageLayout
        title="Магистратура"
        description="Шесть программ магистратуры факультета систем управления и робототехники ИТМО: робототехника и ИИ, системный анализ, электроинженерия, навигация, цифровое производство и интеллектуальные системы управления."
    >
        <PageHero
            label="Факультет СУиР"
            title="Магистратура"
            description="Продвинутые профессиональные знания и навыки в магистратуре откроют новые границы для вашего роста в карьере квалифицированного специалиста в науке и инженерии."
            actions={
                <>
                    <Button href={externalLinks.abitMaster} withArrow>Подать документы</Button>
                    <Button href="#programs" variant="secondary">Выбрать программу</Button>
                </>
            }
            image="/images/csr/news/photo-robotics.webp"
            imageAlt="Студенты магистратуры работают с роботами в лаборатории"
        />
        <MasterPrograms />
        <MasterTeachers />
        <MasterSteps />
        <WinterSchool />
    </PageLayout>
);

export default MasterPage;
