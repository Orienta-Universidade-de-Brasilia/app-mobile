import { Container, InputContainer, EyeIconWrapper, ContainerCellphone } from "./styles";
import { TextInputProps } from "react-native";
import { Eye } from "phosphor-react-native";
import { EyeSlash } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { useState } from "react";

type Props = TextInputProps & TouchableOpacityProps & {
    security: boolean;
    isCellphone: boolean;
}

export function Input({security = false, isCellphone = false, ...rest}: Props) {
    const [showPassword, setShowPassword] = useState(false)
    const [isSecurity, setIsSecurity] = useState(security);

    function handleShowPassword () {
        setShowPassword(!showPassword);
        setIsSecurity(!isSecurity);
    }

    return (
        <InputContainer>
                {isCellphone ? (
                    <ContainerCellphone
                        returnKeyType="done"
                        keyboardType="numeric"
                        type={'cel-phone'}
                        {...rest}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                          }}
                    />
                ) : (
                    <Container
                        secureTextEntry={isSecurity}
                        {...rest}
                    />
                )}
            { security ? 
                <EyeIconWrapper {...rest} onPress={handleShowPassword}>
                    { showPassword ? <Eye /> : <EyeSlash /> }
                </EyeIconWrapper> : ''
            }
        </InputContainer>
    )
};