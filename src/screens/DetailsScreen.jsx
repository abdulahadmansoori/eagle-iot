// screens/DetailsScreen.js

import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { itemId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
}

export default DetailsScreen;
