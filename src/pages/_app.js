import 'nprogress/nprogress.css';
import Router from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~styled/theme';

import NProgress from 'nprogress';
import GlobalStyle from '~styled/global';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 600,
  showSpinner: false
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SessionProvider
          session={session}
          options={{
            refetchInterval: 60,
            refetchInterval: 0
          }}
        >
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
