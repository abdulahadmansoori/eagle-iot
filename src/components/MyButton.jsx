import React from 'react'
import { Button } from 'react-native-paper';

export const MyButton = ({ text, func }) => {
    return (
        <Button mode="contained" onPress={func}
            style={{
                // backgroundColor: '#055FA8',
                borderRadius: 5,
            }}>
            {text}
        </Button>
    )
}
