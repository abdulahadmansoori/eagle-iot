/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from 'react-native-paper';

import defaultTheme from './theme';

const theme = {
    colors: {
        ...DefaultTheme.colors,
        ...defaultTheme.colors,
    },
    fonts: {
        ...DefaultTheme.fonts,
        ...defaultTheme.fonts
    }
}
const Main = () => {

    // const theme = {
    //     ...DefaultTheme,
    //     // Specify custom property
    //     myOwnProperty: true,
    //     // Specify custom property in nested object
    //     // colors: {
    //     //   ...DefaultTheme.colors,
    //     //   myOwnColor: '#BADA55',
    //     // },
    //     colors: {
    //         ...DefaultTheme.colors,
    //         primary: "#055FA8",
    //         secondary: "#5D9AD1",
    //         success: "#0BAD5E",
    //         error: "#DF0000",
    //         warning: "#FFBF00",
    //         info: "#18A0FB",
    //         background: "#ffffff",
    //         text: "#1C2330"
    //     },
    // };

    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
