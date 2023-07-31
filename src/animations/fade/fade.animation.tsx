import {animated, useSpring} from '@react-spring/web';
import {ReactNode} from 'react';

interface FadeAnimationProps {
  children: ReactNode;
}

/**
 * Component to fade in and out
 */
export function FadeAnimation({children}: FadeAnimationProps) {
  const props = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
  });

  return <animated.div style={props}>{children}</animated.div>;
}
