import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";


export function Routes() {
    return (
        <View style={{flex: 1, backgroundColor: "transparent"}}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}