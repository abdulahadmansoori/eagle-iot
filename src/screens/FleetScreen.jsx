import React from 'react'
import { Searchbar, Card, Title, Paragraph } from 'react-native-paper';
import { View, Image } from 'react-native';
export const FleetScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <View style={{ margin: 30 }}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            {/* <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
                icon="magnify"
                direction="rtl"
                onIconPress={() => console.log('Searching')}
            /> */}

            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={{ flex: 1 }} // Take up remaining space
                />
                <Searchbar.Icon
                    icon="magnify"
                    onPress={() => console.log('Searching')}
                />
            </View> */}

            <Card>
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Title>abc</Title>
                        <Paragraph>abc</Paragraph>
                    </View>
                    <Image
                        style={{ width: 100, height: 100, resizeMode: 'cover' }}
                        source={{ uri: "../assets/logo.png" }}
                    />
                </Card.Content>
            </Card>
        </View>
    )
}
