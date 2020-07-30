import React, { ReactElement } from 'react'
import { FaShoppingCart, FaSpotify, FaYoutube } from 'react-icons/fa'
import { AnimationSpring } from './animation.spring'

export const ReleasesCardIcons = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <AnimationSpring payload={
                (
                    <div className="releases-icons color-02">
                        <a
                            href={`${release.url}/spotify`}
                            className="releases-icons-spotify"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${release.artist} - ${release.name} - Spotify`}
                        >
                            <FaSpotify />
                        </a>

                        <a
                            href={`${release.url}/youtube`}
                            className="releases-icons-youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${release.artist} - ${release.name} - YouTube`}
                        >
                            <FaYoutube />
                        </a>

                        <a
                            href={release.url}
                            className="releases-icons-cart"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${release.artist} - ${release.name} - Buy`}
                        >
                            <FaShoppingCart />
                        </a>
                    </div>
                )
            }
            />

        </>
    )

}