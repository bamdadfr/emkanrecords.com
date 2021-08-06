import React from 'react'
import PropTypes from 'prop-types'
import { HeaderComponent } from '../../components/header/header.component'

const propTypes = {
    'children': PropTypes.element.isRequired,
}

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @returns {React.ReactElement} react component
 */
export function AppLayout ({ children }) {

    return (
        <>
            <section className="page">
                <HeaderComponent/>
                {children}
            </section>
        </>
    )

}

AppLayout.propTypes = propTypes