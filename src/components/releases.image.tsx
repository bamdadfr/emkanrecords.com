import React, { ReactElement } from 'react'
import { AnimationSpring } from './animation.spring'

export const ReleasesImage = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <AnimationSpring payload={
                (
                    <img
                        src={release.image}
                        alt={release.name}
                    />
                )
            }
            />

        </>
    )

}