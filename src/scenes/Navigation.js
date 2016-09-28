import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeScene = (path, name) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: path
        });
        navigator.to(path, name);
        drawer.closeDrawer();
    };

    render() {
        const { route } = this.state;

        return (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('./../img/nav.jpg')} />}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={require('./../img/bdlogo.png')}/>} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>Bryan Tanner</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    items={[{
                        icon: 'location-city',
                        value: 'Firm',
                        active: route === 'firm',
                        onPress: () => this.changeScene('firm'),
                        onLongPress: () => this.changeScene('firm')
                    }, {
                        icon: 'people',
                        value: 'Teams',
                        active: route === 'team',
                        onPress: () => this.changeScene('team'),
                        onLongPress: () => this.changeScene('team')
                    }, {
                        icon: 'person',
                        value: 'Client',
                        active: route === 'client',
                        onPress: () => this.changeScene('client'),
                        onLongPress: () => this.changeScene('client')
                    }, {
                        icon: 'person',
                        value: 'User',
                        label: '1',
                        active: route === 'user',
                        onPress: () => this.changeScene('user'),
                        onLongPress: () => this.changeScene('user')
                    }]}
                />

            </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};