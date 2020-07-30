import React, { ReactElement } from 'react'
import { AnimationSpring } from './animation.spring'
import { AboutHello } from './about.hello'
import { AboutDemo } from './about.demo'

export const About = (): ReactElement => {

    return (
        <>
            <AnimationSpring payload={
                (
                    <>

                        <p className="color-01">
                            digital record label from France.
                        </p>

                        <AboutHello />

                        <AboutDemo />

                    </>
                )
            }
            />
        </>
    )

}
