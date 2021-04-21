import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'

export default function AnimationFadeComponent ({ children }) {

    const props = useSpring ({ 'opacity': 1, 'from': { 'opacity': 0 }})

    return (
        <animated.div style={props}>
            {children}
        </animated.div>
    )

}

AnimationFadeComponent.propTypes = {
    'children': PropTypes.arrayOf (PropTypes.node).isRequired,
}