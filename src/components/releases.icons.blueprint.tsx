import React, { ReactElement } from 'react'

export const ReleasesIconsBlueprint = (props: any): ReactElement => {

    const { release, vendorName, vendorIcon } = props
    const Icon = vendorIcon

    return (
        <>
            <a
                href={`${release.url}/${vendorName}`}
                // className="releases-icons-youtube"
                className={`releases-icons-${vendorName}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${release.artist} - ${release.name} - ${vendorName}`}
            >
                <Icon />
            </a>
        </>
    )

}