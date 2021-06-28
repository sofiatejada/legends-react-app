import React, { Component } from 'react';
import List from './List';
// import Spinner from './Spinner';
import { getItems } from './utils';

export default class Main extends Component {

    state = {
        pokeLegends: [],
        loading: false,
    }

    componentDidMount = async () => {
        const legendsAPI = await getItems();

        this.setState({ pokeLegends: legendsAPI });
    }
    
    
    
    
    render() {
        return (
            <div>
                {/* <Spinner /> */}
                {this.state.pokeLegends.map(item => <List pokeLegend={item} />)}
            </div>
        )
    }
}
