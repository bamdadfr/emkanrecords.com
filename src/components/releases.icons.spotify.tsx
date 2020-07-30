import React, { ReactElement } from 'react'
import { FaSpotify } from 'react-icons/fa'

export const ReleasesIconsSpotify = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <a
                href={`${release.url}/spotify`}
                className="releases-icons-spotify"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${release.artist} - ${release.name} - Spotify`}
            >
                <FaSpotify />
            </a>
        </>
    )

}