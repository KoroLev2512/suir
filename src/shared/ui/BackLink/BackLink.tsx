import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

export const BackLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className={styles.link}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {children}
    </Link>
);
