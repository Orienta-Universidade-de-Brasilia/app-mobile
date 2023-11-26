import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Acess } from "@screens/Acess";
import { Login } from "@screens/Login";
import { Register } from "@screens/Register";
import { RegisterFormData } from "@screens/RegisterFormData";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator initialRouteName="acess" screenOptions={{ headerShown: false}}>
            <Screen 
                name="acess"
                component={Acess}
            />

            <Screen 
                name="login"
                component={Login}
            />

            <Screen 
                name="register"
                component={Register}
            />

            <Screen 
                name="registerFormData"
                component={RegisterFormData}
            />
        </Navigator>
    )
}