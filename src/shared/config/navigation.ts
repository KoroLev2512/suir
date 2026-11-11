export type NavItem = { href: string; label: string };

export const mainNavigation: NavItem[] = [
    { href: "/bachelor", label: "Бакалавриат" },
    { href: "/master", label: "Магистратура" },
    { href: "/phd", label: "Аспирантура" },
    { href: "/science", label: "Наука" },
    { href: "/news", label: "Новости" },
    { href: "/contacts", label: "Контакты" },
];

export const externalLinks = {
    abit: "https://abit.itmo.ru",
    abitBachelor: "https://abit.itmo.ru/bachelor",
    abitMaster: "https://abit.itmo.ru/master",
    abitPhd: "https://abit.itmo.ru/phd",
    masterRules: "https://abit.itmo.ru/page/79",
    winterSchool: "https://roboschool.itmo.ru/ru",
    vk: "https://vk.com/robototehnika.itmo",
    telegram: "https://t.me/robot_itmo",
    youtube: "https://www.youtube.com/@itmo4robots",
    itmo: "https://itmo.ru/",
    privacy: "https://itmo.ru/file/pages/79/personal_data_policy.pdf",
    infoRules: "https://itmo.ru/images/pages/79/Pravila_ispolzovanija_informacii.pdf",
};

export const facultyContacts = {
    address: "Санкт-Петербург, Кронверкский проспект, 49",
    phone: "+7 (812) 457-18-56",
};
