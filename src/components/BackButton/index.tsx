import { TouchableOpacityProps } from "react-native";
import { IconGoBack, ButtonGoBack } from "./styles";

export function BackButton({...rest} : TouchableOpacityProps) {
    return (
        <ButtonGoBack {...rest}>
            <IconGoBack color="#FFFF" size={32}/>
        </ButtonGoBack>
    );
}