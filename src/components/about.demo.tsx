import React, { ReactElement } from 'react'
import { FaAt } from 'react-icons/fa'

export const AboutDemo = (): ReactElement => {

    return (
        <p className="color-02">
            feel free to send us your demo at
            <br />
            <span className="color-03">
                demo
            </span>
            <FaAt className="icon-at" />
            emkanrecords.com
            <br />
            soundcloud links only
        </p>
    )

}