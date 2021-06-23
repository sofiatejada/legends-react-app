import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h3>Legends</h3>
                <nav>
                    <NavLink></NavLink>
                    <NavLink></NavLink>
                </nav>
            </div>
        )
    }
}
