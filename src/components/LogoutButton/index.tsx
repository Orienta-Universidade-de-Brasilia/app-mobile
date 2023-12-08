import { TouchableOpacityProps } from "react-native";
import { IconGoOut, ButtonLogout } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export function LogoutButton(props : TouchableOpacityProps) {
    const { logout } = useAuth();

    return (
        <ButtonLogout {...props} onPress={logout}>
            <IconGoOut color="#FFFF" size={32}/>
        </ButtonLogout>
    );
}