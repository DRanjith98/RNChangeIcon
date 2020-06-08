import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {changeIcon} from 'react-native-change-icon';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => changeIcon('react')}>
        <Text style={styles.button}>SWITCH TO react ICON</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeIcon('js')}>
        <Text style={styles.button}>SWITCH TO js ICON</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});