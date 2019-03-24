import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapContainer from './components/map-container'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3
  },
});
