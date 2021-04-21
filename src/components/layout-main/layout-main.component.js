import React from 'react'
import PropTypes from 'prop-types'
import styles from './layout-main.module.scss'

export default function LayoutMainComponent ({ children }) {

    return (
        <main className={styles.container}>
            {children}
        </main>
    )

}

LayoutMainComponent.propTypes = {
    'children': PropTypes.node.isRequired,
}