import React from 'react'
import { render, screen } from '@testing-library/react'
import { FadeComponent } from './fade.component'

const string = 'this is the content of my test'
const Children = () => <span aria-label="children">{string}</span>

describe ('FadeComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<FadeComponent><Children/></FadeComponent>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<FadeComponent><Children/></FadeComponent>)

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (<FadeComponent><Children/></FadeComponent>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('children', () => {

        it ('should display the string content', () => {

            render (<FadeComponent><Children/></FadeComponent>)

            const children = screen.getByLabelText ('children')

            expect (children).toHaveTextContent (string)

        })

    })

})