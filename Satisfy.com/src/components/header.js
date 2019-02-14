import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.text}> {this.props.text} </Text>
      </View>
    );
  }

}

const styles = {
    container: {
        backgroundColor: "#f8f8f8",
        paddingTop:24,
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
    },

    text:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 13,
    }
}
