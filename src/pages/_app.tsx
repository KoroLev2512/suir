import Head from 'next/head'
import '@/../styles/globals.scss'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App;
