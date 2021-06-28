import React, { Component } from 'react';
import { deleteItem, getItem, updateItem } from './utils';
// import Spinner from './Spinner';

export default class Detail extends Component {

    state = {
        detail: [{
        name: 'Pokemon',
        special_type_id: 1,
        special_group: 'Group',
        type_1: 'Primary',
        type_2: 'Secondary',
        other_forms: false,
        image_url: 'http://placekitten.com/200/300',
        description: 'This is a legendary Pokemon of some description!',
        }]
    }

    componentDidMount = async () => {

        const id = this.props.match.params.legendId;

        const pokeDetail = await getItem(id);

        this.setState({ detail: pokeDetail });
        console.log(this.state);
    }

    handleNameInput = (e) => {
        this.setState({ detail: [{
            name: e.target.value,
            special_type_id: this.state.detail[0].special_type_id,
            special_group: this.state.detail[0].special_group,
            type_1: this.state.detail[0].type_1,
            type_2: this.state.detail[0].type_2,
            other_forms: this.state.detail[0].other_forms,
            image_url: this.state.detail[0].image_url,
            description: this.state.detail[0].description,
        }] });
    }

    handleTypeInput = (e) => {
        this.setState({ detail: [{
            name: this.state.detail[0].name, 
            special_type_id: e.target.value,
            special_group: this.state.detail[0].special_group,
            type_1: this.state.detail[0].type_1,
            type_2: this.state.detail[0].type_2,
            other_forms: this.state.detail[0].other_forms,
            image_url: this.state.detail[0].image_url,
            description: this.state.detail[0].description,
        }] });
    }

    handleGroupInput = (e) => {
        this.setState({ detail: [{
            name: this.state.detail[0].name,
            special_type_id: this.state.detail[0].special_type_id,
            special_group: e.target.value,
            type_1: this.state.detail[0].type_1,
            type_2: this.state.detail[0].type_2,
            other_forms: this.state.detail[0].other_forms,
            image_url: this.state.detail[0].image_url,
            description: this.state.detail[0].description,
        }] });
    }

    handlePTInput = (e) => {
        this.setState({ detail: [{
            name: this.state.detail[0].name,
            special_type_id: this.state.detail[0].special_type_id,
            special_group: this.state.detail[0].special_group,
            type_1: e.target.value,
            type_2: this.state.detail[0].type_2,
            other_forms: this.state.detail[0].other_forms,
            image_url: this.state.detail[0].image_url,
            description: this.state.detail[0].description,
        }] });
    }

    handleSTInput = (e) => {
        this.setState({ detail: [{
            name: this.state.detail[0].name,
            special_type_id: this.state.detail[0].special_type_id,
            special_group: this.state.detail[0].special_group,
            type_1: this.state.detail[0].type_1,
            type_2: e.target.value,
            other_forms: this.state.detail[0].other_forms,
            image_url: this.state.detail[0].image_url,
            description: this.state.detail[0].description,
        }] });
    }

    handleOtherFormsInput = (e) => {
        this.setState({ detail: [{
            name: this.state.detail[0].name,
            special_type_id: this.state.detail[0].special_type_id,
            special_group: this.state.detail[0].special_group,
            type_1: this.state.detail[0].type_1,
            type_2: this.state.detail[0].type_2,
            other_forms: e.target.value,
            image_url: this.state.detail[0].image_url,
            description: this.state.detail[0].description,
        }] });
    }

    handleImageInput = (e) => {
        this.setState({ detail: [{
            name: this.state.detail[0].name,
            special_type_id: this.state.detail[0].special_type_id,
            special_group: this.state.detail[0].special_group,
            type_1: this.state.detail[0].type_1,
            type_2: this.state.detail[0].type_2,
            other_forms: this.state.detail[0].other_forms,
            image_url: e.target.value,
            description: this.state.detail[0].description,
        }] });
    }

    handleDescriptionInput = (e) => {
        this.setState({ detail: [{
            name: this.state.detail[0].name,
            special_type_id: this.state.detail[0].special_type_id,
            special_group: this.state.detail[0].special_group,
            type_1: this.state.detail[0].type_1,
            type_2: this.state.detail[0].type_2,
            other_forms: this.state.detail[0].other_forms,
            image_url: this.state.detail[0].image_url,
            description: e.target.value,
        }] });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        await updateItem(this.props.match.params.legendId, {
            name: this.state.detail[0].name,
            special_type_id: this.state.detail[0].special_type_id,
            special_group: this.state.detail[0].special_group,
            type_1: this.state.detail[0].type_1,
            type_2: this.state.detail[0].type_2,
            other_forms: this.state.detail[0].other_forms,
            image_url: this.state.detail[0].image_url,
            description: this.state.detail[0].description,
        });

        this.props.history.push('/legends');
    }

    handleDelete = async () => {
        deleteItem(this.state.detail[0].id);
        await this.props.history.push('/legends');
    }

    render() {
        return (
            <div>
                {/* <Spinner /> */}
                <content>
                    <img src={this.state.detail[0].image_url} alt="a pokemon"/>
                {/* {
                    this.state.detail &&
                    <List pokeLegend={this.state.detail[0]} />
                }     */}
                </content>
                <content>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name
                            <input onChange={this.handleNameInput} />
                        </label>
                        <label>
                            Legendary Type
                            <select onChange={this.handleTypeInput}>
                                <option value="1">
                                    Sub-Legendary
                                </option>
                                <option value="2">
                                    Legendary
                                </option>
                                <option value="3">
                                    Mythical
                                </option>
                            </select>
                        </label>
                        <label>
                            Legendary Group
                            <input onChange={this.handleGroupInput} />
                        </label>
                        <label>
                            Primary Type
                            <input onChange={this.handlePTInput} />
                        </label>
                        <label>
                            Secondary Type
                            <input onChange={this.handleSTInput} />
                        </label>
                        <label>
                            Other Forms
                            <select onChange={this.handleOtherFormsInput}>
                                <option value="true">
                                    Yes
                                </option>
                                <option value="false">
                                    No
                                </option>
                            </select>
                        </label>
                        <label>
                            Image
                            <input onChange={this.handleImageInput} />
                        </label>
                        <label>
                            Description
                            <input onChange={this.handleDescriptionInput} />
                        </label>
                        <button onClick={this.handleSubmit}>Update</button>
                    </form>
                        <button onClick={this.handleDelete}>Remove</button>
                </content>
            </div>
        )
    }
}

//this details page is where they see the detail of each pokeLegend and are able to up date and delete it