import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { HeaderComponent } from './header.component'

const render = () => {

    const { container } = defaultRender (
        <HeaderComponent/>,
    )

    return {
        container,
    }

}

describe ('HeaderComponent', () => {

    describe ('container', () => {

        it ('should be defined and visible', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render ()

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

})