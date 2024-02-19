import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import DetailsScreen from './screens/DetailsScreen';
import { Image, TouchableOpacity } from 'react-native';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Appbar, Button, IconButton, Text } from 'react-native-paper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import { FleetScreen } from './screens/FleetScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
function App() {

  // const theme = {
  //   ...DefaultTheme,
  //   // Specify custom property
  //   myOwnProperty: true,
  //   // Specify custom property in nested object
  //   // colors: {
  //   //   ...DefaultTheme.colors,
  //   //   myOwnColor: '#BADA55',
  //   // },
  //   colors: {
  //     ...DefaultTheme.colors,
  //     primary: "#055FA8",
  //     secondary: "#5D9AD1",
  //     success: "#0BAD5E",
  //     error: "#DF0000",
  //     warning: "#FFBF00",
  //     info: "#18A0FB",
  //     background: "#ffffff",
  //     text: "#1C2330"
  //   },
  // };
  return (
    // <PaperProvider theme={theme}>
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home"> */}

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Fleet" component={FleetScreen}/>
        <Tab.Screen name="Map" component={SettingScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Notifications" component={SettingScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={SettingScreen} options={{ headerShown: false }} />
      </Tab.Navigator>

      {/* <Stack.Screen name="Home" component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
    // </PaperProvider>
  );
}
// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: isDarkMode ? 'black' : 'white',
//     },
//     text: {
//       color: isDarkMode ? 'white' : 'black',
//     },
//   });

//   return (
//     <>
//       {/* <SafeAreaView> */}
//         <View style={styles.container}>
//           {/* <Image source={require('./assets/logo.png')}/> */}
//           <Text style={styles.text}>
//             EagleIot -Your One-Stop Shop for Effortless Fleet Management
//           </Text>
//           <Text style={styles.text}>Dark Mode</Text>
//           <Button
//             title="Toggle Dark Mode"
//             onPress={() => {
//               setIsDarkMode(!isDarkMode);
//             }}
//           />
//         </View>
//       {/* </SafeAreaView> */}
//     </>
//   );
// }


export default App;
