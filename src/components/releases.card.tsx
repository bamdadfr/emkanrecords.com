import React, { ReactElement } from 'react'
import { AnimationSpring } from './animation.spring'
import { ReleasesCardIcons } from './releases.card.icons'

export const ReleasesCard = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <div className="releases-item">
                <AnimationSpring payload={
                    (
                        <img
                            src={release.image}
                            alt={release.name}
                        />
                    )
                }
                />

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

                <ReleasesCardIcons release={release} />
            </div>
        </>
    )

}