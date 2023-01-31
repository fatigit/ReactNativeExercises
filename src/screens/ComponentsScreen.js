import React from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi there!';
  const greeting2 = <Text>Hello to you!</Text>;

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text>{greeting}</Text>
        {greeting2}
      </SafeAreaView>
    </View>
    //alt tarafta SafeAreaView kullanarak ios'da contentin yukariya dogru cikmasini engelledik.
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
