import { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain='blackcheckdao.art'>
      <Component {...pageProps} />;
    </PlausibleProvider>
  );
}

export default MyApp;
