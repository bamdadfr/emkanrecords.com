import Head from 'next/head';

interface MetaComponentProps {
  title?: string;
  url?: string;
  description?: string;
  image?: string;
}

export const defaultProps = {
  title: 'Emkan Records',
  url: 'https://www.emkanrecords.com',
  description: 'Digital record label from France.',
  image:
    'https://www.emkanrecords.com/_next/image?url=%2Fheader%2Fheader_bright.png&w=384&q=75',
};

/**
 * Component to render meta tags
 */
export function MetaComponent({
  title = defaultProps.title,
  url = defaultProps.url,
  description = defaultProps.description,
  image = defaultProps.image,
}: MetaComponentProps) {
  // noinspection HtmlRequiredTitleElement,HtmlUnknownTarget
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <title>{title}</title>

        <meta
          itemProp="name"
          content={title}
        />
        <meta
          itemProp="description"
          content={description}
        />
        <meta
          name="description"
          content={description}
        />
        <meta
          itemProp="image"
          content={image}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content={title}
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content={image}
        />

        <meta
          property="og:site_name"
          content={title}
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content={url}
        />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={image}
        />

        {/* from https://realfavicongenerator.net/ */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/favicon/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href="/favicon/favicon.ico"
        />
        <meta
          name="msapplication-TileColor"
          content="#000000"
        />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta
          name="theme-color"
          content="#000"
        />
      </Head>
    </>
  );
}
