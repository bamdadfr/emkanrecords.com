import React from 'react'
import PropTypes from 'prop-types'
import styles from './layout-main.module.scss'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @function
 * @name LayoutMainComponent
 * @description layout: main component
 * @param {JSX.Element} children - child component to render
 * @return {JSX.Element}
 */
export default function LayoutMainComponent ({ children }) {

    return (
        <main className={styles.container}>
            {children}
        </main>
    )

}

LayoutMainComponent.propTypes = propTypes