import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Space extends Component {
	render() {
		return (
      <View style={{flex: 1,
          backgroundColor: '#121212',
          width: '100%'}}>
        <Text style={styles.info}>You</Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  info: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#CF6679'
  }
});

export default Space;
