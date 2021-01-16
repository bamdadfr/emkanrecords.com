import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimationSpring } from './animation.spring'

export const AppMenu = (): ReactElement => (
    <>
        <div className="top-bar">
            <AnimationSpring payload={
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
