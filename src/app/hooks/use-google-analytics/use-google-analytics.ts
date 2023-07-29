import {useRouter} from 'next/router';
import {useEffect} from 'react';

import {GA_TRACKING_ID} from './use-google-analytics.constants';

function pageview(url: string) {
  // @ts-expect-error: 2339
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
}

const listener = (url: string) => pageview(url);

export function useGoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', listener);
    return () => router.events.off('routeChangeComplete', listener);
  }, [router.events]);
}
