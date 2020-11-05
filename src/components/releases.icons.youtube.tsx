import React, { ReactElement } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { ReleasesIconsBlueprint } from './releases.icons.blueprint'

export const ReleasesIconsYoutube = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <ReleasesIconsBlueprint
                release={release}
                vendorName="youtube"
                vendorIcon={FaYoutube}
            />
        </>
    )

}