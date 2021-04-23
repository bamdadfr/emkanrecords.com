import React, { useEffect } from 'react'
import '@/styles/index.scss'
import LayoutComponent from '@/components/layout/layout.component'
import { useRouter } from 'next/router'
import * as gtag from '@/lib/gtag'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'

export default function MyApp ({ Component, pageProps, err }) {

    const router = useRouter ()

    useEffect (() => {

        const handleRouteChange = (url) => {

            gtag.pageview (url)

        }

        router.events.on ('routeChangeComplete', handleRouteChange)

        return () => {

            router.events.off ('routeChangeComplete', handleRouteChange)

        }

    }, [router.events])

    return (
        <>
            <Helmet
                htmlAttributes={{ 'lang': 'en' }}
                title="Emkan Records"
                meta={[
                    ...MetaData,
                ]}
            />
            <LayoutComponent>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} err={err}/>
            </LayoutComponent>
        </>
    )

}