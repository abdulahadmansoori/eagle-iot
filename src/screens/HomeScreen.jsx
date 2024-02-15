// screens/HomeScreen.js

// import { Button } from '@mui/material';
import React, { useState } from 'react';
import { View } from 'react-native';
// import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { MyButton } from '../components/Button';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Button mode="contained" onPress={() => navigation.navigate('Details', { itemId: 123 })}
                style={{
                    backgroundColor: '#055FA8',
                    borderRadius: 5,
                }}>
                MyButton
            </Button> */}
            <MyButton text={"MyButton"} func={() => navigation.navigate('Details', { itemId: 123 })} />

        </View>
    );
}

export default HomeScreen;
