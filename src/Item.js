import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {
    render() {
        return (
            <div>
                <Link>
                    <img src={this.props.poop.image_url} alt={this.props.poop.name} />
                    <h4>{this.props.poop.name}</h4>
                </Link>
            </div>
        )
    }
}
