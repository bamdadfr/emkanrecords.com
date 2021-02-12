import '@/styles/index.scss'
import Layout from '@/components/layout'
import { useEffect } from 'react'
import { init } from '../lib/matomo'

const matomoUrl = 'https://matomo.emkanrecords.com/'
const matomoId = '6'

export default function MyApp ({ Component, pageProps }) {

    useEffect (() => {

        init ({
            'url': matomoUrl,
            'siteId': matomoId,
        })

    }, [])

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )

}

