import { Container, ContentInput } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button"
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";
import { BackButton } from "@components/BackButton";

export function Login() {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Header />

            <BackButton onPress={handleGoBack} />

            <ContentInput>
                <Input 
                    placeholder="E-mail institucional"
                />

                <Input
                    security 
                    placeholder="Senha"
                />
            </ContentInput>

            <Button title="Entrar"/>

            
        </Container>
    );
}