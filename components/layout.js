import Head from 'next/head'
import Meta from '@/components/layout-meta'
import LayoutHeader from './layout-header'
import LayoutNav from './layout-nav'
import LayoutMain from './layout-main'
import LayoutFooter from './layout-footer'
import AnimationFade from './animation-fade'

export default function Layout ({ children }) {

    return (
        <>
            <AnimationFade>
                {/* <Head> */}
                {/*    <title> */}
                {/*        Emkan Records */}
                {/*    </title> */}
                {/*    /!* <link rel="icon" href="/favicon-32x32.png"/> *!/ */}
                {/* </Head> */}

                <Meta/>

                <section className="page">
                    <LayoutHeader/>
                    <LayoutNav/>
                    <LayoutMain>
                        {children}
                    </LayoutMain>
                    <LayoutFooter/>
                </section>
            </AnimationFade>
        </>
    )

}
