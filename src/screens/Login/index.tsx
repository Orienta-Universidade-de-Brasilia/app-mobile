import { useState } from "react";
import { Container, ContentInput, ContentValidation, TextValidation } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button"
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";
import { BackButton } from "@components/BackButton";

import { useAuth } from "../../hooks/useAuth";

export function Login() {

    const { login } = useAuth();
    const regex = /unb\.br$/i;

    const navigation = useNavigation();

    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ showError, setShowError ] = useState<boolean>(false);

    function handleGoBack() {
        navigation.goBack();
    }

    let newErrors = [];

    if (!regex.test(email)) {
        newErrors.push('Insira um e-mail institucional da UnB válido.');
    }

    async function handleSignIn() {
        try {
            const emailLowerCase = email?.toLowerCase();

            setShowError(false);
            await login(emailLowerCase, password);
        } catch {
            setShowError(true);
        }
    }

    return (
        <Container>
            <Header />

            <BackButton onPress={handleGoBack} />

            <ContentInput>
                <Input
                    placeholder="E-mail institucional"
                    value={email}
                    onChangeText={(value: string) => setEmail(value)}
                />

                <Input
                    security 
                    placeholder="Senha"
                    value={password}
                    onChangeText={(value: string) => setPassword(value)}
                />
            </ContentInput>

            { showError ? 
                <ContentValidation>
                    <TextValidation>
                        Email ou senha inválido.
                    </TextValidation>
                </ContentValidation>
                : ''
            }

            <Button
                onPress={handleSignIn}
                title="Entrar"
            />

            
        </Container>
    );
}