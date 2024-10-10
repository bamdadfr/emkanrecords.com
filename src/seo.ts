import {type DefaultSeoProps} from 'next-seo';

const title = 'Emkan Records - Digital record label from France';
const description = 'Digital record label from France';
const url = 'https://www.emkanrecords.com';

export const SEO: DefaultSeoProps = {
  defaultTitle: title,
  titleTemplate: '%s | Emkan Records',
  description: 'Digital record label from France',
  canonical: url,
  norobots: false,
  openGraph: {
    title,
    description,
    siteName: title,
    type: 'website',
    locale: 'en_US',
    url,
    images: [
      {
        url: '/_next/image?url=%2Fheader%2Fheader_bright.png&w=384&q=75',
        width: 384,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#000000',
    },
  ],
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#000000',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
};
