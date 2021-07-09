import React, { useEffect } from 'react'
import '@/styles/index.scss'
import LayoutComponent from '@/components/layout/layout.component'
import { useRouter } from 'next/router'
import Head from 'next/head'
import * as gtag from '@/lib/gtag'

/**
 * @function
 * @name MyApp
 * @description next.js _app
 * @param {*} props - react component props
 * @param {React.ReactNode} props.Component - child
 * @param {object} props.pageProps - child props
 * @param {Error} props.err - error
 * @returns {React.ReactNode} - react component
 */
export default function MyApp ({ Component, pageProps, err }) {

    const router = useRouter ()

    /**
     * @function
     * @name onRouterEvents
     * @description inject google tag script when route events are fired
     * @returns {Function<void>} - react hook clean up function
     */
    function onRouterEvents () {

        const handleRouteChange = (url) => {

            gtag.pageview (url)

        }

        router.events.on ('routeChangeComplete', handleRouteChange)

        return () => {

            router.events.off ('routeChangeComplete', handleRouteChange)

        }

    }

    useEffect (onRouterEvents, [router.events])

    return (
        <>
            <Head>
                <title>
                    Emkan Records
                </title>
                <meta property="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content="Emkan Records"/>
                <meta property="og:description" content="Digital record label from France."/>
                <meta property="og:image"
                    content="https://www.emkanrecords.com/_next/image?url=%2Fheader%2Fheader_bright.png&w=384&q=75"/>
            </Head>
            <LayoutComponent>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} err={err}/>
            </LayoutComponent>
        </>
    )

}