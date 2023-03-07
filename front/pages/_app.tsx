import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import Layout from 'components/Layout';
import theme from 'styles/theme';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import store from 'state/store';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SessionProvider session={session}>
                    <Layout>
                        {globalStyles}
                        <Component {...pageProps} />
                    </Layout>
                </SessionProvider>
            </ThemeProvider>
        </Provider>
    );
}
