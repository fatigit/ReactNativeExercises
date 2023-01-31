import React, { useState } from 'react';
import {
  View,
  Text,
  Stylesheet,
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);     // Buradaki ilk elemanimiz counter. useState(0) vererek counterinin initial degerini 0 yaptik. Ikinci eleman olan setCounter (setCounter aslinda bir state fonksiyonu) counterin yeni degerini set etmemizi sagliyor.

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
            setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
