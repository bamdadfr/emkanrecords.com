import React, { ReactElement } from 'react'
import { FaShoppingCart, FaSpotify, FaYoutube } from 'react-icons/fa'
import { AnimationSpring } from './animation.spring'
import { ReleasesIconsBlueprint } from './releases.icons.blueprint'

export const ReleasesIcons = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <AnimationSpring payload={
                (
                    <div className="releases-icons color-02">

                        <ReleasesIconsBlueprint
                            release={release}
                            vendorName="spotify"
                            vendorIcon={FaSpotify}
                        />

                        <ReleasesIconsBlueprint
                            release={release}
                            vendorName="youtube"
                            vendorIcon={FaYoutube}
                        />
                        
                        <ReleasesIconsBlueprint
                            release={release}
                            vendorName="cart"
                            vendorIcon={FaShoppingCart}
                        />

                    </div>
                )
            }
            />

        </>
    )

}