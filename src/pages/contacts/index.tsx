import React from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { ContactsAdmission, ContactsGeneral, ContactsLeadership } from "@/widgets/contacts";

const ContactsPage = () => (
    <PageLayout title="Контакты" description="Контакты факультета систем управления и робототехники ИТМО: руководство, приёмная кампания, адрес и соцсети.">
        <ContactsGeneral />
        <ContactsLeadership />
        <ContactsAdmission />
    </PageLayout>
);

export default ContactsPage;
