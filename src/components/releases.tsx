import React, { ReactElement } from 'react'
import { FaShoppingCart, FaSpotify, FaYoutube } from 'react-icons/fa'
import { AnimationSpring } from './animation.spring'
import { ReleasesData } from './releases.data'

export const Releases = (): ReactElement => {

    return (
        <>

            <div className="releases-container">

                {ReleasesData.map (release => (
                    <React.Fragment key={release.url}>
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

                        </div>
                    </React.Fragment>
                ))}

            </div>
        </>
    )

}
