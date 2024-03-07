import Layout from '../components/layout'
import GlobalStyles from '../styles/global.css';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <AppCacheProvider {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppCacheProvider>
  )
}