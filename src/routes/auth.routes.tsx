import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Acess } from "@screens/Acess";
import { Login } from "@screens/Login";
import { Register } from "@screens/Register";
import { RegisterFormData } from "@screens/RegisterFormData";


type AuthRoutes = {
    access: undefined,
    login: undefined,
    register: undefined,
    registerFormData: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return (
        <Navigator initialRouteName="access" screenOptions={{ headerShown: false}}>
            <Screen 
                name="access"
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