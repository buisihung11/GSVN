import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// redux
import { store, persistor } from 'redux/store';

import theme from 'theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Gia su Viet Nam</title>
        <link rel="shortcut icon" href="/img/chakra-logo.png" />
        <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="NextJS with Chakra-ui Boilerplate" />
      </Head>
      <ReduxProvider store={store}>
        <PersistGate loading={<p>Loading</p>} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ReduxProvider>
    </ChakraProvider>
  );
}

export default MyApp;
