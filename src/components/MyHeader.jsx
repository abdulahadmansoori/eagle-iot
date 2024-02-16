import React from 'react'
import { View } from 'react-native';
import { Appbar, Avatar, Text } from 'react-native-paper';

export const MyHeader = () => {
    return (

        <Appbar.Header style={{ backgroundColor: "transparent" }}>
            <Avatar.Image size={40} source={require('../assets/profile.jpg')}/>
            <Appbar.Content
                title={
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, color: 'grey' }}>Good Morning</Text>
                        <Text style={{ fontSize: 16, fontWeight: "700" }}>Andrew Ainsley</Text>
                    </View>
                }
                titleStyle={{ alignSelf: 'center' }}
            />
            <Appbar.Action icon="bell" onPress={() => console.log('Bell icon pressed')} />
        </Appbar.Header>
    );
}
