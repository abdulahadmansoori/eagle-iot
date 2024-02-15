import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
