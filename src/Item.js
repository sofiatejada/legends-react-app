import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {
    render() {
        return (
            <div>
                <Link to={`/legends/${this.props.poop.id}`}>
                    <img src={this.props.poop.image_url} alt={this.props.poop.name} />
                    <h4>{this.props.poop.name}</h4>
                </Link>
                <h5>
                    Legendary Group: {this.props.poop.special_group}
                </h5>
                <ul>
                    <li>Primary Type: {this.props.poop.type_1}</li>
                    <li>Secondary Type: {this.props.poop.type_2}</li>
                </ul>
                <p>
                    {this.props.poop.description}
                </p>
            </div>
        )
    }
}
