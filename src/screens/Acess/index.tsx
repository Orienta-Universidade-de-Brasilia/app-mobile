import { Container, Title, ContentButton } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native";


export function Acess() {
    const navigation = useNavigation();

    function handleRegister() {
        navigation.navigate('register');
    }

    function handleLogin() {
        navigation.navigate('login');
    }

    return (
        <Container>
            <Header />

            <Title>
                <Title color="BLUE">Orienta Un</Title>
                <Title color="GREEN">B</Title>
            </Title>

            <ContentButton>
                <Button 
                    title="Registrar"
                    onPress={handleRegister}
                />
            </ContentButton>

            <Button
                type="SECONDARY"
                title="Entrar"
                onPress={handleLogin}
            />
        </Container>
    );
}