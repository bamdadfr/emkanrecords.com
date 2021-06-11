import React from 'react'
import { shallow } from 'enzyme'
import LayoutHeaderComponent from './layout-header.component'

describe ('LayoutHeaderComponent', () => {

    const component = <LayoutHeaderComponent/>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

})