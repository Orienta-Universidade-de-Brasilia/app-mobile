import { TextInput } from "react-native";
import styled from "styled-components";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled(TextInput)`
    flex: 1;

    min-height: 35px;
    max-height: 35px;

    width: 100%;

    font-size: 20px;
    font-weight: bold;

    background-color: ${ props  => props.theme.COLORS.ICE};
    color: ${ props  => props.theme.COLORS.GREY};

    border-bottom-color: ${ props  => props.theme.COLORS.GREY};
    border-bottom-width: 2.3px;
`

export const InputContainer = styled(View)`
    position: relative;
    width: 100%;

    margin-bottom: 30px;

    min-height: 35px;
    max-height: 35px;
    
    border-bottom-color: red;
`;

export const EyeIconWrapper = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 10px;
`;