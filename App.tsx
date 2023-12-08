import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Text, StyleSheet } from 'react-native';
import theme from './src/theme'

import { AuthContextProvider } from "./src/contexts/AuthContext"
import { Routes } from "./src/routes";

export default function App() {

    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    return (
        <ThemeProvider theme={theme}>
            <StatusBar 
                backgroundColor="transparent"
                translucent
                //style="light"
            />
            <AuthContextProvider>
                <Routes/>
            </AuthContextProvider>
        </ThemeProvider>
    );
}