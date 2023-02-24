import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import Layout from 'components/Layout';
import theme from 'styles/theme';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                {globalStyles}

                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
