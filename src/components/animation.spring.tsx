import React, { ReactElement } from 'react'
import { Spring } from 'react-spring/renderprops'
import { IAnimationSpringProps } from './animation.spring.types'

export const AnimationSpring = (props: IAnimationSpringProps): ReactElement => {

    const { payload } = props

    return (
        <>
            <Spring
                from={{ 'opacity': 0 }}
                to={{ 'opacity': 1 }}
            >
                {(props): ReactElement => (
                    <div style={props}>
                        {payload}
                    </div>
                )}
            </Spring>
        </>
    )

}
