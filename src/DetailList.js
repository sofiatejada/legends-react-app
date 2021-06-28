import React, { Component } from 'react';
import DetailItem from './DetailItem';

export default class DetailList extends Component {
    render() {
        return (
            <div>
                <DetailItem poop={this.props.pokeLegend}>
                    {console.log(this.props.pokeLegend)}
                </DetailItem>
            </div>
        )
    }
}
