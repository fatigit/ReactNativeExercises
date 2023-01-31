import React from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';

const ExerciseScreen = () => {
  const name = 'Fatih';

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.text1}>Getting started with React Native!</Text>
        <Text style={styles.text2}>My name is {name}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 45,
  },
  text2: {
    fontSize: 20,
  },
});

export default ExerciseScreen;
