import { createBottomTabNavigator, BottomTabNavigationProp}  from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/listIcon.svg";
import SearchSvg from "@assets/searchIcon.svg";
import SearchFilledSvg from "@assets/searchIconFilled.svg";
import MatchSvg from "@assets/matchIcon.svg";

import { List } from "@screens/List";
import { Match } from "@screens/Match";
import { Search } from "@screens/Search";

type AppRoutes = {
    listar: undefined,
    buscar: undefined,
    matchs: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;


const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: "#3AA36D",
            tabBarInactiveTintColor: "#247BA0"
        }}>
            <Screen 
                name="listar"
                component={List}
                options={{
                    title: 'Listar',
                    tabBarIcon: ({ color}) => (
                        <HomeSvg fill={color} />
                    )
                }}
            />

            <Screen 
                name="buscar"
                component={Search}
                options={{
                    title: 'Buscar',
                    tabBarIcon: ({ color, focused}) => (
                        focused ? <SearchFilledSvg fill={color} /> : <SearchSvg fill={color} /> 
                    )
                }}
            />

            <Screen 
                name="matchs"
                component={Match}
                options={{
                    title: 'Matchs',
                    tabBarIcon: ({ color}) => (
                        <MatchSvg fill={color} />
                    )
                }}
            />

        </Navigator>
    )
}