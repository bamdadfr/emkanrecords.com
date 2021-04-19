import React from 'react'
import LayoutNavLinkComponent from '../layout-nav-link/layout-nav-link.component'
import styles from './layout-nav.module.scss'

function LayoutNavComponent () {

    return (
        <nav className={styles.container}>
            <LayoutNavLinkComponent href="/" text="About"/>
            <LayoutNavLinkComponent href="/releases" text="Releases"/>
        </nav>
    )

}

export default LayoutNavComponent