import React from 'react';
import {Text} from "@/shared/Text";

import styles from './styles.module.scss';

export const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.numbers}>
                <Text as="p" className={styles.text}>428 бюджетных мест</Text>
                <div className={styles.spacer}></div>
                <Text as="p" className={styles.text}>17 программ</Text>
                <div className={styles.spacer}></div>
                <Text as="p" className={styles.text}>32 специальности</Text>
            </div>
            <div className={styles.areas}>
                <Text as="p" className={styles.areaText}>
                    Научные и образовательные направления:
                </Text>
                <div className={styles.spacer}></div>
                <Text as="p" className={styles.text}>
                    Robotics and Control / Industrial Systems / Electrical Engineering Mathematics
                </Text>
            </div>
        </div>
    );
};
