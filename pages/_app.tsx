import type { AppProps } from "next/app";
import GlobalStyle from "@/utils/styled-component/Globalstyle";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import store from "@/utils/redux/store";
import { Provider } from "react-redux";
import AuthProvider from "@/components/auth/AuthProvider";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/ui/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setLoading(false);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" }); // 滾動到頂部
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          {loading ? <Loading /> : <Component {...pageProps} />}
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
