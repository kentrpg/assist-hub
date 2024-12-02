import type { AppProps } from "next/app";
import GlobalStyle from '@/utils/styles/Globals';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
        <Layout>  
          <Component {...pageProps} />
        </Layout>
        </ThemeProvider>
    </>
  );
}
