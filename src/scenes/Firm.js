import React, { Component } from 'react';
import { View } from 'react-native';
import FileList from './../components/FileList';

export default class Firm extends Component {

    render() {
        const activeTab = "firm";

        return (
            <FileList activeTab={this.props.activeTab} />
        )
    }
}
