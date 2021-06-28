import React, { Component } from 'react';
import { createItem } from './utils';
// import request from 'superagent';
// import Spinner from './Spinner';

export default class Create extends Component {

    state = {
        name: 'Pokemon',
        special_type_id: 1,
        special_group: 'Group',
        type_1: 'Primary',
        type_2: 'Secondary',
        other_forms: false,
        image_url: 'http://placekitten.com/200/300',
        description: 'This is a legendary Pokemon of some description!',
    }

    handleNameInput = (e) => {
        this.setState({ name: e.target.value});
    }

    handleTypeInput = (e) => {
        this.setState({ special_type_id: Number(e.target.value)});
    }

    handleGroupInput = (e) => {
        this.setState({ special_group: e.target.value });
    }

    handlePTInput = (e) => {
        this.setState({ type_1: e.target.value });
    }

    handleSTInput = (e) => {
        this.setState({ type_2: e.target.value });
    }

    handleOtherFormsInput = (e) => {
        this.setState({ other_forms: e.target.value });
    }

    handleImageInput = (e) => {
        this.setState({ image_url: e.target.value });
    }

    handleDescriptionInput = (e) => {
        this.setState({ description: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        await createItem({
            name: this.state.name,
            special_type_id: this.state.special_type_id,
            special_group: this.state.special_group,
            type_1: this.state.type_1,
            type_2: this.state.type_2,
            other_forms: this.state.other_forms,
            image_url: this.state.image_url,
            description: this.state.description,
        });

        this.props.history.push('/legends');
    }

    render() {
        return (
            <div>
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
                        <button>Add</button>
                    </form>
                </content>
            </div>
        )
    }
}

//this is the component that they are linked to when they click on create in the header