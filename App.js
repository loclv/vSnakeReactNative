import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Space from './components/Space'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: '#000'}}>
          <Text style={styles.info}>AI</Text>
        </View>
        <Space />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#CF6679'
  }
});
