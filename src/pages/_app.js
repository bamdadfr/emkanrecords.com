import React, { useEffect } from 'react'
import '@/styles/index.scss'
import LayoutComponent from '@/components/layout/layout.component'
import { useRouter } from 'next/router'
import * as gtag from '@/lib/gtag'

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
        <LayoutComponent>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} err={err}/>
        </LayoutComponent>
    )

}