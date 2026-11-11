import type { Person } from "@/shared/ui/PersonCard";

export type ProgramTeamMember = Person & { isHead: boolean };

export type ProgramReview = {
    name: string;
    meta: string;
    text: string[];
};

export type MasterProgram = {
    slug: string;
    title: string;
    directions: string[];
    places: string;
    stats: {
        budget: number;
        contract: number;
        target: number;
        years: number;
        price: string;
    };
    examDates: string[];
    about: string[];
    manager: Person;
    team: ProgramTeamMember[];
    reviews: ProgramReview[];
};
