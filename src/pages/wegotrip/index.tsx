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
                        className="js-wegotrip-widget"
                        width="100%"
                        height="580"
                        frameBorder="0"
                        scrolling="no"
                        style={{ marginLeft: '-10px', marginRight: '-10px', minHeight: '580px' }}
                        src="https://wegotrip.dev/en/widgets/?perPage=3&coupon=25&showMore=true&preorder=true&ids=4247%2C11%2C4428%2C6"
                        title="WeGoTrip Partner Widget"
                    />
                </div>
            </main>
        </div>
    );
};

export default WeGoTripPage;
