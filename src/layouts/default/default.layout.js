import React from 'react'
import PropTypes from 'prop-types'
import { MetaComponent, FooterComponent, MenuComponent } from '../../components'
import { FadeComponent } from '../../animations'
import styles from './default.layout.module.scss'

const propTypes = {
    'children': PropTypes.oneOfType ([
        PropTypes.element,
        PropTypes.array,
    ]).isRequired,
    'customMeta': PropTypes.bool,
}

const defaultProps = {
    'customMeta': false,
}

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @param {boolean} [props.customMeta] handle meta on your own?
 * @returns {React.ReactElement} react component
 */
export function DefaultLayout ({
    children,
    customMeta = defaultProps.customMeta,
}) {

    return (
        <>
            {!customMeta && <MetaComponent/>}
            <MenuComponent/>
            <main className={styles.container}>
                <FadeComponent>
                    {children}
                </FadeComponent>
            </main>
            <FooterComponent/>
        </>
    )

}

DefaultLayout.propTypes = propTypes

DefaultLayout.defaultProps = defaultProps