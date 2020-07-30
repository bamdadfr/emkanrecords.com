import React, { ReactElement } from 'react'
import { FaYoutube } from 'react-icons/fa'

export const ReleasesIconsYoutube = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <a
                href={`${release.url}/youtube`}
                className="releases-icons-youtube"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${release.artist} - ${release.name} - YouTube`}
            >
                <FaYoutube />
            </a>
        </>
    )

}