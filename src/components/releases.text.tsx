import React, { ReactElement } from 'react'
import { AnimationSpring } from './animation.spring'

export const ReleasesText = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <AnimationSpring payload={
                (
                    <h1 className="color-01">
                        {release.name}
                    </h1>
                )
            }
            />

            <AnimationSpring payload={
                (
                    <h2 className="color-02">
                        {release.artist}
                    </h2>
                )
            }
            />

        </>
    )

}