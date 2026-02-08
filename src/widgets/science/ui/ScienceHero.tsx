import React from 'react';
import { Text } from "@/shared/Text";
import styles from './ScienceHero.module.scss';

export const ScienceHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.label}>ФАКУЛЬТЕТ РОБОТОТЕХНИКИ</div>
                    <Text as="h1" className={styles.title}>
                        Научная<br />деятельность
                    </Text>
                    <Text as="p" className={styles.subtitle}>
                        Сотрудники факультета активно занимаются научной деятельностью. Около<br />
                        трети всех сотрудников занимают исключительно научные должности
                    </Text>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <Text as="p" className={styles.statText}>
                            <span className={styles.highlight}>Ежегодные</span> публикации в международных<br />
                            рецензируемых научных изданиях, входящих<br />
                            в том числе в первую квартиль Q1
                        </Text>
                    </div>
                    <div className={styles.statItem}>
                        <Text as="p" className={styles.statText}>
                            Передовые <span className={styles.highlight}>НИР и ОКР</span> по актуальным направлениям<br />
                            развития науки и техники
                        </Text>
                    </div>
                    <div className={styles.statItem}>
                        <Text as="p" className={styles.statText}>
                            Входим в <span className={styles.highlight}>ТОП-100</span> университетов мира<br />
                            по профильному направлению "Automation<br />
                            and Control" благодаря деятельности факультета<br />
                            СУ и Р.
                        </Text>
                    </div>
                </div>

                <div className={styles.starburst}></div>
            </div>
        </section>
    );
};
