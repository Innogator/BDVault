import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class FileItem extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    updatedDate: React.PropTypes.string,
    icon: React.PropTypes.string,
  }

  render() {
    return (
      <View style={styles.fileItem}>
        <View style={styles.iconLeft}>
          <Icon
              name={this.props.icon}
              size={35}
              color={'rgb(59,89,152)'}
          />
        </View>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.url}>{this.props.url}</Text>
        <View style={styles.iconRight}>
          <Icon
              name="chevron-right"
              size={35}
              color={'rgb(59,89,152)'}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 fileItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5,
    height: 65
  },
  cover: {
    flex: 1,
    resizeMode: 'contain'
  },
  iconLeft: {
    flex: 1,
  },
  iconRight: {
    flex: 0.25,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  },
  url: {
    flex: 1,
    fontSize: 18,
  },
});

export default FileItem;
