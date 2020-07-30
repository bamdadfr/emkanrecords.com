import React, { ReactElement } from 'react'
import { AnimationSpring } from './animation.spring'
import { ReleasesIconsSpotify } from './releases.icons.spotify'
import { ReleasesIconsYoutube } from './releases.icons.youtube'
import { ReleasesIconsCart } from './releases.icons.cart'

export const ReleasesIcons = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <AnimationSpring payload={
                (
                    <div className="releases-icons color-02">

                        <ReleasesIconsSpotify release={release} />
                        <ReleasesIconsYoutube release={release} />
                        <ReleasesIconsCart release={release} />

                    </div>
                )
            }
            />

        </>
    )

}