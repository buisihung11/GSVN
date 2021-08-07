import Head from 'next/head';
import { AppProps } from 'next/app';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// redux
import { store, persistor } from 'redux/store';
import ThemeConfig from 'theme';
import React from 'react';
import ThemePrimaryColor from 'components/ThemePrimaryColor';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <Head>
          <title>Gia su Viet Nam</title>
          <link rel="shortcut icon" href="/img/chakra-logo.png" />
          <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="GSVN tự hào là nền tảng đầu tiên cung cấp đội ngũ tutor chất lượng tại việt nam"
          />
        </Head>
        <ReduxProvider store={store}>
          <PersistGate loading={<p>Loading</p>} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </ReduxProvider>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}

export default MyApp;
