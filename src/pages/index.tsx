import React from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { Banner } from "@/widgets/banner";
import { Info } from "@/widgets/info";
import { Education } from "@/widgets/education";
import { Achievements } from "@/widgets/achievements";
import { News } from "@/widgets/news";
import { Partners } from "@/widgets/partners";
import { WinterSchool } from "@/widgets/winter-school";

const HomePage = () => {
    return (
        <PageLayout description="Факультет систем управления и робототехники Университета ИТМО: бакалавриат, магистратура, аспирантура, научные лаборатории и проекты.">
            <Banner />
            <Info />
            <Partners />
            <Education />
            <Achievements />
            <News />
            <WinterSchool />
        </PageLayout>
    );
};

export default HomePage;
