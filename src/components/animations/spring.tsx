import React from 'react'
import { Spring } from 'react-spring/renderprops'

interface IProps {
    payload: React.ReactElement,
}

export default (props: IProps): React.ReactElement => {

    const { payload } = props

    return (
        <>
            <Spring
                from={{ 'opacity': 0 }}
                to={{ 'opacity': 1 }}
            >
                {props => (
                    <div style={props}>
                        {payload}
                    </div>
                )}
            </Spring>
        </>
    )

}
