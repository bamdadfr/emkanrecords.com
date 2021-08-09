import React from 'react'
import styles from './menu.component.module.scss'
import { ActiveLinkComponent } from './components/active-link/active-link.component'

/**
 * @returns {React.ReactElement} react component
 */
export function MenuComponent () {

    return (
        <>
            <nav className={styles.container}>
                <ActiveLinkComponent
                    href="/"
                    text="About"
                />
                <ActiveLinkComponent
                    href="/releases"
                    text="Releases"
                />
            </nav>
        </>
    )

}