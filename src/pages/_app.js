import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import '@/styles/index.scss'
import LayoutComponent from '@/components/layout/layout.component'
import { useRouter } from 'next/router'
import * as gtag from '@/lib/gtag'

function EmkanApp ({ Component, pageProps }) {

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
            <Component {...pageProps} />
        </LayoutComponent>
    )

}

EmkanApp.propTypes = {
    'Component': PropTypes.func.isRequired,
    'pageProps': PropTypes.shape ({}).isRequired,
}

export default EmkanApp