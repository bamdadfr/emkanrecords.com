import React from 'react'
import { FaAt } from 'react-icons/fa'
import { AnimationSpring } from './animation.spring'

export const About = (): React.ReactElement => {

    return (
        <>
            <AnimationSpring payload={
                (
                    <>

                        <p className="color-01">
                            digital record label from France.
                        </p>

                        <p className="color-02">
                            for more info, or any other concern, please email
                            <br />
                            <span className="color-03">
                                hello
                            </span>
                            <FaAt className="icon-at" />
                            emkanrecords.com
                        </p>

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

                    </>
                )
            }
            />
        </>
    )

}
