import React from 'react'
import Head from 'next/head'

/**
 * @function
 * @name LayoutMetaComponent
 * @description layout: meta component
 * @returns {React.ReactNode} - react component
 */
export default function LayoutMetaComponent () {

    // noinspection HtmlRequiredTitleElement,HtmlUnknownTarget
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"
            />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000"/>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#000000"/>
            <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
            <meta name="theme-color" content="#000"/>
        </Head>
    )

}