import Layout from "../components/layout";
import GlobalStyles from "../styles/global.css";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { NextUIProvider } from "@nextui-org/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppCacheProvider {...pageProps}>
      <Layout>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </Layout>
    </AppCacheProvider>
  );
}
