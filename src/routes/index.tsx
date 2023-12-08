import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { useAuth } from "../hooks/useAuth";


export function Routes() {
    const { user } = useAuth();
    console.log(user)

    return (
        <View style={{flex: 1, backgroundColor: "transparent"}}>
            <NavigationContainer>
                { user.accesstoken ? <AppRoutes/> : <AuthRoutes /> }
            </NavigationContainer>
        </View>
    )
}