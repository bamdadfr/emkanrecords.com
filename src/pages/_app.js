import '@/styles/index.scss'
import Layout from '@/components/layout'
import { useEffect } from 'react'
import { init } from '@/lib/matomo'

export default function MyApp ({ Component, pageProps }) {

    useEffect (() => {

        init ({
            'url': 'https://matomo.emkanrecords.com/',
            'siteId': '6',
        })

    }, [])

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )

}

