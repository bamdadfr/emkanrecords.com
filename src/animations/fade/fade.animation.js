import React from 'react';
import PropTypes from 'prop-types';
import {animated, useSpring} from '@react-spring/web';

const propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Component to fade in and out
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Component children
 * @returns {React.ReactElement} - Rendered component
 */
export function FadeAnimation({children}) {
  const props = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
  });

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
}

FadeAnimation.propTypes = propTypes;
