import React from 'react';
import {Text, StyleSheet, SafeAreaView, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ExerciseScreen from './src/screens/ExerciseScreen';
import ImageScreen from './src/screens/ImageScreen';
import TestScreen from './src/screens/TestScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import CounterScreen2 from './src/screens/CounterScreen2';
import TextScreen from './src/screens/TextScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Component"
          component={ComponentsScreen}
          options={{title: 'This is components screen'}}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{title: 'List Page'}}
        />
        <Stack.Screen
          name="Exercise"
          component={ExerciseScreen}
          options={{title: 'Exercise Screen'}}
        />
        <Stack.Screen
          name="Image"
          component={ImageScreen}
          options={{title: 'Image Screen'}}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{title: 'Test Screen'}}
        />
        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={{title: 'Counter Screen'}}
        />
        <Stack.Screen
          name="Color"
          component={ColorScreen}
          options={{title: 'Color Screen'}}
        />
        <Stack.Screen
          name="Square"
          component={SquareScreen}
          options={{title: 'Square Screen'}}
        />
        <Stack.Screen
          name="Counter2"
          component={CounterScreen2}
          options={{title: 'Counter2 Screen'}}
        />
        <Stack.Screen
          name="Text"
          component={TextScreen}
          options={{title: 'Text Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
