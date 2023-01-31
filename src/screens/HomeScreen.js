import React from 'react';
import {Text, StyleSheet, SafeAreaView, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Component', {name: 'Component'})}
        title="Go to components screen"
      />
      <Button
        onPress={() => navigation.navigate('List', {name: 'List'})}
        title="Go to list screen"
      />
      <Button
        onPress={() => navigation.navigate('Exercise', {name: 'Exercise'})}
        title="Go to exercise screen"
      />
      <Button
        onPress={() => navigation.navigate('Image', {name: 'Image'})}
        title="Go to image screen"
      />
      <Button
        onPress={() => navigation.navigate('Test', {name: 'Test'})}
        title="Test screen"
      />
      <Button
        onPress={() => navigation.navigate('Counter', {name: 'Counter'})}
        title="Go to counter screen"
      />
      <Button
        onPress={() => navigation.navigate('Color', {name: 'Color'})}
        title="Go to color screen"
      />
      <Button
        onPress={() => navigation.navigate('Square', {name: 'Square'})}
        title="Go to square screen"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
  },
});

export default HomeScreen;
