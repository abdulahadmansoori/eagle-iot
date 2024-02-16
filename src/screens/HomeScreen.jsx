// screens/HomeScreen.js

// import { Button } from '@mui/material';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
// import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { MyButton } from '../components/MyButton';
import { MyHeader } from '../components/MyHeader';


const HomeScreen = ({ navigation }) => {

    const boxesData = [
        { count: 10, label: 'Apples' },
        { count: 20, label: 'Bananas' },
        { count: 15, label: 'Oranges' },
        { count: 12, label: 'Grapes' },
    ];
    return (
        <View>
            <View style={{ margin: 30 }}>
                <MyHeader />
                <View style={{ marginTop: 10 }}>
                    <Card>
                        <Card.Cover source={{ uri: 'https://th.bing.com/th/id/OIP.aQxHz35hajg81HAJw2KUWAHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7' }} />
                    </Card>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.container}>
                        {/* First row */}
                        <View style={styles.row}>
                            {/* First box */}
                            <View style={[styles.box, styles.largeBox, { display: "flex", flexDirection: "row", boxShadow: "0px 4px 15px 0px #0000001A"}]}>
                                <Text style={{ flex: 2, margin: 3, textAlign: "center", fontSize: 30, fontWeight: 700 }}>21</Text>
                                <Text style={{ flex: 3, fontSize: 14, fontWeight: 700 }}>Total Assets</Text>
                            </View>
                            {/* Second box */}
                            <View style={[styles.box, styles.largeBox, { display: "flex", flexDirection: "row" }]}>
                                <Text style={{ flex: 2, margin: 3, textAlign: "center", fontSize: 30, fontWeight: 700 }}>21</Text>
                                <Text style={{ flex: 3, fontSize: 14, fontWeight: 700 }}>Enabled Assets</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            {/* First box */}
                            <View style={[styles.box, styles.largeBox, { display: "flex", flexDirection: "row" }]}>
                                <Text style={{ flex: 2, margin: 3, textAlign: "center", fontSize: 30, fontWeight: 700 }}>04</Text>
                                <Text style={{ flex: 3, fontSize: 14, fontWeight: 700 }}>Recently Communicated</Text>
                            </View>
                            {/* Second box */}
                            <View style={[styles.box, styles.largeBox, { display: "flex", flexDirection: "row" }]}>
                                <Text style={{ flex: 2, margin: 3, textAlign: "center", fontSize: 30, fontWeight: 700 }}>02</Text>
                                <Text style={{ flex: 3, fontSize: 14, fontWeight: 700 }}>Never Communicated</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Card>
                            <Card.Content>
                                <Text variant="titleLarge">Card title</Text>
                                <Text variant="bodyMedium">Card content</Text>
                            </Card.Content>
                        </Card>
                    </View>
                    {/* <MyButton text={"MyButton"} func={() => navigation.navigate('Details', { itemId: 123 })} /> */}
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        width: '100%',
    },
    box: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
    },
    largeBox: {
        flex: 1, // Each box takes up equal space in the row
    },
});

export default HomeScreen;
