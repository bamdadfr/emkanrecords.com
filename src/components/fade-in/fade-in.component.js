import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @returns {React.ReactElement} - react component
 */
export function FadeInComponent ({ children }) {

    const props = useSpring ({ 'opacity': 1, 'from': { 'opacity': 0 }})

    return (
        <animated.div style={props}>
            {children}
        </animated.div>
    )

}

FadeInComponent.propTypes = propTypes