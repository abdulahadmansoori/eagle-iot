import React from 'react'
import { Appbar } from 'react-native-paper';

export const MyHeader = () => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
        </Appbar.Header>
    );
}
