import React, { ReactElement } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { ReleasesIconsBlueprint } from './releases.icons.blueprint'

export const ReleasesIconsSpotify = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <ReleasesIconsBlueprint
                release={release}
                vendorName="spotify"
                vendorIcon={FaSpotify}
            />
        </>
    )

}