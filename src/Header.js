import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h3>Legends</h3>
                <nav>
                    <p>
                        <NavLink to="/">Home</NavLink>
                    </p>
                    <p>
                        <NavLink to="/legends">Legends List</NavLink>
                    </p>
                    <p>
                        <NavLink to="/create">Add a Legend</NavLink>
                    </p>
                </nav>
            </div>
        )
    }
}
