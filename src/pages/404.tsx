import React from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { PageHero } from "@/shared/ui/PageHero";
import { Button } from "@/shared/ui/Button";

const NotFoundPage = () => (
    <PageLayout title="Страница не найдена">
        <PageHero
            label="Ошибка 404"
            title="Такой страницы нет"
            description="Возможно, она переехала или в адресе опечатка. Начните с главной или загляните в новости факультета."
            actions={
                <>
                    <Button href="/" withArrow>На главную</Button>
                    <Button href="/news" variant="secondary">Новости</Button>
                </>
            }
            image="/images/robot_winter.png"
            imageVariant="cutout"
        />
    </PageLayout>
);

export default NotFoundPage;
