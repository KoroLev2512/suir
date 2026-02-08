import React from "react";
import Link from "next/link";
import { Text } from "@/shared/Text";

import styles from "./styles.module.scss";

export const Navigation = () => {
    return (
        <div className={styles.section}>
            <Text as="h4" className={styles.text}>Бакалавриат</Text>
            <Link href="/master" passHref legacyBehavior>
                <Text as="a" className={styles.text}>Магистратура</Text>
            </Link>
            <Text as="h4" className={styles.text}>Аспирантура</Text>
            <Link href="/science" passHref legacyBehavior>
                <Text as="a" className={styles.text}>Наука</Text>
            </Link>
            <Text as="h4" className={styles.text}>Новости</Text>
        </div>
    )
}
