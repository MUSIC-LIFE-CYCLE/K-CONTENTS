import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import Layout from 'components/Layout';
import theme from 'styles/theme';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <SessionProvider session={session}>
                <Layout>
                    {globalStyles}
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider>
        </ThemeProvider>
    );
}
