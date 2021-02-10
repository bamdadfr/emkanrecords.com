import Meta from './layout-meta'
import LayoutHeader from './layout-header'
import LayoutNav from './layout-nav'
import LayoutMain from './layout-main'
import LayoutFooter from './layout-footer'
import AnimationFade from './animation-fade'

export default function Layout ({ children }) {

    return (
        <>
            <AnimationFade>

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
