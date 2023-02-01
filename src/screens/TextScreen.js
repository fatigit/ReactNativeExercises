import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text style={styles.name}>Enter name:</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none" // ios icin baslangic input degerini yazarken kucuk harfle baslamasini istedik
            autoCorrect={false}  // yine ios icin, otomatik duzeltmeyi kapattik
            value= {name}
            onChangeText={(newValue) => setName(newValue)}
            />
            <Text style={styles.blank}>My name is {name}</Text>

            <Text style={styles.password}>Enter password:</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none" // ios icin baslangic input degerini yazarken kucuk harfle baslamasini istedik
            autoCorrect={false}  // yine ios icin, otomatik duzeltmeyi kapattik
            value= {password}
            onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 5 ? <Text>Password has to be more than 4 characters!</Text> : <Text>Password is {password}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    name: {
        color: 'red'
    },
    blank: {
        height: 70
    },
    password: {
        color: 'red',
    }
});

export default TextScreen;