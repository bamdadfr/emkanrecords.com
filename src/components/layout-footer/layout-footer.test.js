import React from 'react'
import { shallow } from 'enzyme'
import LayoutFooterComponent from './layout-footer.component'

describe ('LayoutFooterComponent', () => {

    const component = <LayoutFooterComponent/>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)
    
    })

})