import React from 'react'
import PropTypes from 'prop-types'
import 'sass-reset'
import '../app/styles/index.scss'
import { useApp } from '../app/hooks/use-app/use-app'
import { AppLayout } from '../layouts/app/app.layout'

const propTypes = {
    'Component': PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    'pageProps': PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    'err': PropTypes.any,
}

const defaultProps = {
    'err': undefined,
}

/**
 * @param {object} props component props
 * @param {Function} props.Component next.js component
 * @param {object} props.pageProps next.js props
 * @param {*} props.err next.js errors
 * @returns {React.ReactElement} react component
 */
export default function MyApp ({ Component, pageProps, err }) {

    useApp ()

    return (
        <>
            <AppLayout>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} err={err}/>
            </AppLayout>
        </>
    )

}

MyApp.propTypes = propTypes

MyApp.defaultProps = defaultProps