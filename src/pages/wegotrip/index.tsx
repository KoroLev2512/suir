import React from 'react';
import Script from 'next/script';

import styles from './styles.module.scss';

const WeGoTripPage = () => {
    return (
        <div className={styles.page}>
            <Script
                src="https://wegotrip.dev/helpers/widgetManager.js"
                data-weg-partner-id="25"
                strategy="afterInteractive"
            />

            <main className={styles.main}>
                <div className={styles.widgetContainer}>
                    <iframe
                        className={`${styles.widgetFrame} js-wegotrip-widget`}
                        width="100%"
                        frameBorder="0"
                        scrolling="no"
                        src="https://wegotrip.dev/en/widgets/?perPage=3&coupon=25&showMore=true&preorder=true&ids=4247%2C11%2C4428%2C6"
                        title="WeGoTrip Partner Widget"
                    />
                </div>
            </main>
        </div>
    );
};

export default WeGoTripPage;
