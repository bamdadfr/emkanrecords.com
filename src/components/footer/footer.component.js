import React from 'react'
import styles from './footer.component.module.scss'

/**
 * @returns {React.ReactElement} react component
 */
export function FooterComponent () {

    return (
        <>
            <footer className={styles.container}>
                Made by&nbsp;
                <a
                    href="https://www.bamdadsabbagh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Bamdad Sabbagh
                </a>
            </footer>
        </>
    )

}