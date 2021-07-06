import React from 'react'
import AnimationFadeComponent from '@/components/animation-fade/animation-fade.component'

/**
 * @function
 * @description page: 404
 * @returns {React.ReactNode} - react component
 */
export default function NotFound () {

    return (
        <AnimationFadeComponent>
            <h1>
                Page Not Found
            </h1>
        </AnimationFadeComponent>
    )

}