import React from 'react';
import {Diakont, Electropribor, Sber, Fenix} from "@/shared/lib/icons";

import styles from './styles.module.scss';

export const Partners = () => {
    return (
        <div className={styles.wrapper}>
            {/* <Arrival/> */}
            <Diakont/>
            <Electropribor/>
            <Sber/>
            <Fenix/>
        </div>
    );
};
