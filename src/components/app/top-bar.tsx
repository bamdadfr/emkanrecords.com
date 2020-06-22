import React from 'react'
import { NavLink } from 'react-router-dom'
import Spring from '../animations/spring'

export default function (): React.ReactElement {

    return (
        <>
            <div className="top-bar">
                <Spring payload={
                    (
                        <div className="top-bar-item">
                            <NavLink
                                exact
                                to="/"
                                className="top-bar-link"
                                activeClassName="top-bar-link-active"
                            >
                                <button type="button">
                                    Releases
                                </button>
                            </NavLink>

                            <NavLink
                                to="/about"
                                className="top-bar-link"
                                activeClassName="top-bar-link-active"
                            >
                                <button type="button">
                                    About
                                </button>
                            </NavLink>
                        </div>
                    )
                }
                />
            </div>
        </>
    )

}
