import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import 'sass-reset';
import '../app/styles/index.scss';

import {AppProps} from 'next/app';
import {AppComponent} from 'next/dist/shared/lib/router/router';
import {DefaultSeo} from 'next-seo';
import React from 'react';
import {SEO} from 'src/seo';

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
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultSeo {...SEO} />
      <AppLayout>
        <Component
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...pageProps}
          err={err}
        />
      </AppLayout>
    </>
  );
}
