import React from 'react'
import { render, screen } from '@testing-library/react'
import { FadeAnimation } from './fade.animation'

const string = 'this is the content of my test'
const Children = () => <span aria-label="children">{string}</span>

describe ('FadeAnimation', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<FadeAnimation><Children/></FadeAnimation>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<FadeAnimation><Children/></FadeAnimation>)

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (<FadeAnimation><Children/></FadeAnimation>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('children', () => {

        it ('should display the string content', () => {

            render (<FadeAnimation><Children/></FadeAnimation>)

            const children = screen.getByLabelText ('children')

            expect (children).toHaveTextContent (string)

        })

    })

})