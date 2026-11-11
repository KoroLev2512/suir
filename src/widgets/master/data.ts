import { masterPrograms } from "./programs";
import type { MasterProgram, ProgramTeamMember } from "./types";

export { masterPrograms };

export const getProgramBySlug = (slug: string): MasterProgram | undefined =>
    masterPrograms.find((program) => program.slug === slug);

/** Программа считается англоязычной, если в названии есть английская версия */
export const isEnglishProgram = (program: MasterProgram) => /\/\s*[A-Za-z]/.test(program.title);

/** Руководители программ — без повторов, в порядке программ */
export const programHeads: (ProgramTeamMember & { program: MasterProgram })[] = masterPrograms.flatMap((program) =>
    program.team.filter((member) => member.isHead).slice(0, 1).map((member) => ({ ...member, program })),
);

export const admissionSteps = [
    { id: "01", title: "Зарегистрироваться в личном кабинете на abit.itmo.ru", description: "С 1 апреля 2026 года", action: { label: "Личный кабинет", href: "https://abit.itmo.ru" } },
    { id: "02", title: "Пройти вступительное испытание", description: "Сдать экзамен или победить в конкурсе, олимпиаде, перезачесть итоговую государственную аттестацию, предоставить рекомендательное письмо" },
    { id: "03", title: "Заполнить все документы в личном кабинете" },
    { id: "04", title: "Найти себя в списках рекомендованных к поступлению" },
    { id: "05", title: "Подписать согласие о зачислении" },
    { id: "06", title: "Найти себя в приказе о поступлении" },
    { id: "07", title: "Поздравляем! Вы студент Университета ИТМО" },
];
