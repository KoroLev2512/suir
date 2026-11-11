import React from "react";
import Image from "next/image";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type Person = {
    name: string;
    role?: string;
    photo?: string;
    email?: string;
    phone?: string;
};

type PersonCardProps = Person & {
    badge?: string;
    layout?: "vertical" | "horizontal";
    className?: string;
};

const initials = (name: string) =>
    name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

export const PersonCard = ({ name, role, photo, email, phone, badge, layout = "vertical", className }: PersonCardProps) => {
    return (
        <article className={classNames(styles.card, styles[layout], className)}>
            <div className={styles.photo}>
                {photo ? (
                    <Image src={photo} alt={name} fill sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, 300px" className={styles.image} />
                ) : (
                    <span className={styles.initials} aria-hidden="true">{initials(name)}</span>
                )}
            </div>
            <div className={styles.info}>
                {badge && <span className={styles.badge}>{badge}</span>}
                <h3 className={styles.name}>{name}</h3>
                {role && <p className={styles.role}>{role}</p>}
                {(email || phone) && (
                    <div className={styles.contacts}>
                        {email && <a href={`mailto:${email}`} className={styles.link}>{email}</a>}
                        {phone && <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className={styles.link}>{phone}</a>}
                    </div>
                )}
            </div>
        </article>
    );
};
