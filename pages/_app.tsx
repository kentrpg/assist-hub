import type { AppProps } from "next/app";
import GlobalStyle from '@/utils/styled-component/Globalstyle';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>  
          <Component {...pageProps} />
        </Layout>
        </ThemeProvider>
    </>
  );
}
