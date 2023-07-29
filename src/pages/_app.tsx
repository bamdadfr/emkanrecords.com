import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import 'sass-reset';
import '../app/styles/index.scss';

import {AppProps} from 'next/app';
import {AppComponent} from 'next/dist/shared/lib/router/router';

import {useApp} from '../app/hooks/use-app/use-app';
import {AppLayout} from '../layouts/app/app.layout';

interface MyAppProps {
  Component: AppComponent;
  pageProps: AppProps;
  err?: Error;
}

const defaultProps = {
  err: undefined,
};

export default function MyApp({
  Component,
  pageProps,
  err = defaultProps.err,
}: MyAppProps) {
  useApp();

  return (
    <>
      <AppLayout>
        <Component
          {...pageProps}
          err={err}
        />
      </AppLayout>
    </>
  );
}
