import React, { Component } from 'react';
import List from './List';
import Spinner from './Spinner';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Spinner />
                <List />
            </div>
        )
    }
}
