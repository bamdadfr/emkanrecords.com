import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @function
 * @name AnimationFadeComponent
 * @description fade in child component using `react-spring`
 * @param {JSX.Element} children - child component to render
 * @return {JSX.Element}
 */
export default function AnimationFadeComponent ({ children }) {

    const props = useSpring ({ 'opacity': 1, 'from': { 'opacity': 0 }})

    return (
        <animated.div style={props}>
            {children}
        </animated.div>
    )

}

AnimationFadeComponent.propTypes = propTypes