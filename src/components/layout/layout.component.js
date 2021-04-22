import React from 'react'
import PropTypes from 'prop-types'
import LayoutMetaComponent from '@/components/layout-meta/layout-meta.component'
import LayoutHeaderComponent from '@/components/layout-header/layout-header.component'
import LayoutNavComponent from '@/components/layout-nav/layout-nav.component'
import LayoutMainComponent from '@/components/layout-main/layout-main.component'
import LayoutFooterComponent from '@/components/layout-footer/layout-footer.component'
import AnimationFadeComponent from '@/components/animation-fade/animation-fade.component'

export default function LayoutComponent ({ children }) {

    return (
        <>
            <AnimationFadeComponent>

                <LayoutMetaComponent/>

                <section className="page">
                    <LayoutHeaderComponent/>
                    <LayoutNavComponent/>
                    <LayoutMainComponent>
                        {children}
                    </LayoutMainComponent>
                    <LayoutFooterComponent/>
                </section>
            </AnimationFadeComponent>
        </>
    )

}

LayoutComponent.propTypes = {
    'children': PropTypes.node.isRequired,
}