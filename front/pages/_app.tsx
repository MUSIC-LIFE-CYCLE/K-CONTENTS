import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/GlobalStyle';
import Layout from 'components/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            {globalStyles}
            <Component {...pageProps} />
        </Layout>
    );
}
