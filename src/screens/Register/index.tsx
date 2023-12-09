import { Container, ContentInput, ContentValidation, TextValidation, ContainerSelect } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button"
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "@components/BackButton";
import { useState } from "react";
import { api } from "../../services/api";
import { storageUserSave } from "../../storage/storageUser";

import { useAuth } from "../../hooks/useAuth";

export function Register() {

    const { setUser } = useAuth();

    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confirmPassword, setConfirmPassword ] = useState<string>('');
    const [ listError, setListError ] = useState<string[]>([]);
    
    const navigation = useNavigation();
    function handleGoBack() { navigation.goBack() }
    function handleRegisterFormData() { navigation.navigate('registerFormData') }

    async function handleValidation() {
        const regex = /unb\.br$/i;

        let newErrors = [];

        if(password !== confirmPassword)
            newErrors.push('As senhas devem ser iguais');

        if(password.length < 6)
            newErrors.push('A senha deve ter no mínimo 6 caracteres.');

        if (!regex.test(email)) {
            newErrors.push('Insira um e-mail institucional da UnB válido.');
        }

        if(newErrors.length == 0)
        {
            try {
                const emailLowerCase = email?.toLowerCase();

                const response = await api.post('/user', {email: emailLowerCase, password});

                if(response.status == 201)
                {
                    handleRegisterFormData();

                    setUser({
                            id: response.data._id,
                            email: response.data.email,
                            password: password,
                            type: response.data.userType.description
                        })
    
                } else{
                    newErrors.push('O email inserido já está em uso.');
                }
            }
            catch (error) {
                console.log(error)
                newErrors.push('O email inserido já está em uso.');
            }
        }

        setListError(newErrors);
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

                <Input
                    security 
                    placeholder="Confirmar Senha"
                    value={confirmPassword}
                    onChangeText={(value: string) => setConfirmPassword(value)}
                />

            </ContentInput>

            <ContentValidation>
                {listError.map((error, index) => (
                    <TextValidation key={index}>
                        {error}
                    </TextValidation>
                ))}
            </ContentValidation>

            <Button 
                onPress={handleValidation}
                title="Enviar"
            />

            
        </Container>
    );
}