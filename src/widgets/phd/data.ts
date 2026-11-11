// Источник: csr.itmo.ru/phd
export const specialties = [
    { code: "2.2.5", title: "Приборы навигации", passport: "https://storage.itmo.ru/index.php/s/Kj8zJiw3jePdeB8/download", abit: "https://abit.itmo.ru/program/postgraduate/navigation-instruments" },
    { code: "2.2.8", title: "Методы и приборы контроля и диагностики материалов, изделий, веществ и природной среды", passport: "https://storage.itmo.ru/index.php/s/RrcFtpTFXnydWaw/download", abit: "https://abit.itmo.ru/program/postgraduate/diagnostic-methods" },
    { code: "2.2.9", title: "Проектирование и технология приборостроения и радиоэлектронной аппаратуры", passport: "https://storage.itmo.ru/index.php/s/QbKjxRB9yLGZdPq/download", abit: "https://abit.itmo.ru/program/postgraduate/electronics-design" },
    { code: "2.3.1", title: "Системный анализ, управление и обработка информации, статистика", passport: "https://storage.itmo.ru/index.php/s/dnneJ32sgJ3iYwQ/download", abit: "https://abit.itmo.ru/program/postgraduate/systems-analysis" },
    { code: "2.3.3", title: "Автоматизация и управление технологическими процессами и производствами", passport: "https://storage.itmo.ru/index.php/s/JkNfCHiwmR4emEm/download", abit: "https://abit.itmo.ru/program/postgraduate/process-automation" },
    { code: "2.5.4", title: "Роботы, мехатроника и робототехнические системы", passport: "https://storage.itmo.ru/index.php/s/6PbA8jR5zHtecff/download", abit: "https://abit.itmo.ru/program/postgraduate/robotics-mechatronics" },
];

export const councils = [
    {
        title: "Диссертационный совет Университета ИТМО 03.22.00",
        specialties: ["2.3.1 Системный анализ, управление и обработка информации, статистика", "2.5.4 Роботы, мехатроника и робототехнические системы"],
        href: "https://dissovet.itmo.ru/index.php?main=109&page=628&param=80201",
    },
    {
        title: "Диссертационный совет Университета ИТМО 11.22.00",
        specialties: ["2.2.8 Методы и приборы контроля и диагностики материалов, изделий, веществ и природной среды", "2.2.9 Проектирование и технология приборостроения и радиоэлектронной аппаратуры"],
        href: "https://dissovet.itmo.ru/index.php?main=109&page=628&param=80215",
    },
];

export const keyDates = [
    { date: "1 июня", text: "Начало приёма документов" },
    { date: "5 августа, 18:00", text: "Окончание приёма документов (по московскому времени)" },
    { date: "21 июля — 22 августа", text: "Вступительные испытания" },
    { date: "28 августа, 18:00", text: "Окончание приёма заявлений о согласии на зачисление" },
];

export const usefulLinks = [
    { label: "Правила приёма", href: "https://aspirantura.itmo.ru/?main=4" },
    { label: "Количество мест", href: "https://aspirantura.itmo.ru/?main=6" },
    { label: "Программы вступительных испытаний", href: "https://aspirantura.itmo.ru/?main=9" },
    { label: "Приём иностранных граждан", href: "https://aspirantura.itmo.ru/?main=7" },
    { label: "Open Doors: Russian Scholarship Project", href: "https://aspirantura.itmo.ru/?main=43" },
    { label: "План-проспект диссертации", href: "https://aspirantura.itmo.ru/?main=8" },
];

export const scholarships = [
    { title: "Государственная академическая стипендия", amount: "9 300 ₽" },
    { title: "Повышенная государственная академическая стипендия", amount: "10 800 ₽", note: "Экзамены и аттестация на «хорошо» и «отлично», не более одной оценки «хорошо»" },
    { title: "Повышенная государственная академическая стипендия", amount: "12 300 ₽", note: "Экзамены и аттестация только на «отлично»" },
    { title: "Стипендия Президента Российской Федерации", amount: "75 000 ₽", note: "Для аспирантов очной формы, ведущих исследования по приоритетам научно-технологического развития РФ" },
];

export const achievements = [
    {
        group: "Стажёр аспирантуры",
        items: [
            { text: "Статус стажёра аспирантуры (действующий трудовой договор с организацией)", points: 20 },
            { text: "Рекомендательное письмо от сотрудника ИТМО, готового стать научным руководителем", points: 10 },
        ],
    },
    {
        group: "Публикации и результаты интеллектуальной деятельности",
        items: [
            { text: "Статьи в журналах, индексируемых в Web of Science или Scopus", points: 4 },
            { text: "Публикации в изданиях из перечня ВАК", points: 2 },
            { text: "Патенты на изобретения", points: 2 },
            { text: "Свидетельства о регистрации программы для ЭВМ", points: 2 },
        ],
    },
    {
        group: "Гранты и конкурсы",
        items: [
            { text: "Личный грант на проведение научных исследований (в статусе руководителя)", points: 3 },
            { text: "Участие в коллективном гранте", points: 1 },
            { text: "Победитель предметной студенческой олимпиады всероссийского уровня", points: 5 },
            { text: "Призёр предметной студенческой олимпиады всероссийского уровня", points: 2 },
            { text: "Победитель непредметной студенческой олимпиады всероссийского уровня", points: 1 },
        ],
    },
    {
        group: "Конференции и академические достижения",
        items: [
            { text: "Диплом международной конференции или выставки", points: 2 },
            { text: "Диплом конференции или выставки российского уровня", points: 1 },
            { text: "Опубликованные тезисы докладов на конференциях (за каждые)", points: 1 },
            { text: "Диплом с отличием (специалитет или магистратура)", points: 1 },
        ],
    },
    {
        group: "Другое",
        items: [
            { text: "Сертификат об уровне владения иностранным языком", points: 1 },
            { text: "Участие в программе профессиональной ориентации", points: 5 },
        ],
    },
];

export const pointsLabel = (points: number) => {
    const mod10 = points % 10;
    const mod100 = points % 100;
    if (mod10 === 1 && mod100 !== 11) return `+${points} балл`;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `+${points} балла`;
    return `+${points} баллов`;
};
