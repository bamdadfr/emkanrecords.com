import React, { ReactElement } from 'react'
import { FaAt } from 'react-icons/fa'

export const AboutHello = (): ReactElement => {

    return (
        <p className="color-02">
            for more info, or any other concern, please email
            <br />
            <span className="color-03">
                hello
            </span>
            <FaAt className="icon-at" />
            emkanrecords.com
        </p>
    )

}