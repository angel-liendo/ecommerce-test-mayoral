import { ApolloProvider } from '@apollo/client';
import Layout from 'components/layout';
import { client } from 'graphql/apolloClientInit';
import { GlobalStyles } from 'style/GlobalStyles';
import Header from '../components/header';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
