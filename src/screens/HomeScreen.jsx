// screens/HomeScreen.js

// import { Button } from '@mui/material';
import React, { useState } from 'react';
import { View } from 'react-native';
// import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { MyButton } from '../components/MyButton';
import { MyHeader } from '../components/MyHeader';


const HomeScreen = ({ navigation }) => {
    return (
        <View>
            {/* <MyHeader /> */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* <Button mode="contained" onPress={() => navigation.navigate('Details', { itemId: 123 })}
                style={{
                    backgroundColor: '#055FA8',
                    borderRadius: 5,
                }}>
                MyButton
            </Button> */}
                <MyButton text={"MyButton"} func={() => navigation.navigate('Details', { itemId: 123 })} />

            </View>
        </View> 
    );
}

export default HomeScreen;
