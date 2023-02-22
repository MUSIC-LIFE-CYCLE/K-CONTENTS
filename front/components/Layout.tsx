import Head from 'next/head';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>KPOP</title>
            </Head>
            <Header />
            <div>{children}</div>
        </>
    );
}
