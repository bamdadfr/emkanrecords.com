import React from 'react'
import PropTypes from 'prop-types'
import LayoutMetaComponent from '../layout-meta/layout-meta.component'
import LayoutHeaderComponent from '../layout-header/layout-header.component'
import LayoutNavComponent from '../layout-nav/layout-nav.component'
import LayoutMainComponent from '../layout-main/layout-main.component'
import LayoutFooterComponent from '../layout-footer/layout-footer.component'
import AnimationFadeComponent from '../animation-fade/animation-fade.component'

function LayoutComponent ({ children }) {

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

export default LayoutComponent