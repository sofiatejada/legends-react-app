import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {
    render() {
        return (
            <div>
                <Item poop={this.props.pokeLegend} />
            </div>
        )
    }
}


//this list is the collectin of all the stuff in the endpoint when they just GET
