import { Container, ContentInput, ContentSwitch } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button"
import { Input } from "@components/Input";
import { Switch } from "react-native";
import { Text } from "./styles";
import { BackButton } from "@components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useRoute } from '@react-navigation/native';
import { api } from "../../services/api";


export function RegisterFormData() {
    const navigation = useNavigation();
    const route = useRoute();

    function handleGoBack() { navigation.goBack() }
    

    const [ name, setName ] = useState<string>('');
    const [ lastName, setLastName ] = useState<string>('');
    const [ cellPhone, setCellPhone ] = useState<string>('');
    const [ interestArea, setInterestArea ] = useState<string>('');
    const [ listInterestArea, setListInterestArea ] = useState<string[]>([]);
    const [ wantPair, setWantPair ] = useState(false);
    const toggleSwitch = () => setWantPair(previousState => !previousState);


    async function handleRegister() {
        try {
            const response = await api.put(`/user/${route.params.id}`, {
                firstName: name,
                lastName: lastName,
                cellPhone: cellPhone,
                interestArea: listInterestArea,
                wantPair: wantPair
            });
            console.log('deu certo'),
            console.log(response.data)
        } catch {
            console.log('deu erro')
        }
    }

    const handleInterestAreaChange = (value: string) => {
        setInterestArea(value);
    
        const wordsArray = value.split(',');

        setListInterestArea(wordsArray);
      };
    
    return (
        <Container>
            <Header />

            <BackButton onPress={handleGoBack} />

            <ContentInput>
                <Input 
                    placeholder="Nome"
                    value={name}
                    onChangeText={(value: string) => setName(value)}
                />

                <Input 
                    placeholder="Sobrenome"
                    value={lastName}
                    onChangeText={(value: string) => setLastName(value)}
                />

                <Input 
                    placeholder="Telefone"
                    value={cellPhone}
                    onChangeText={(value: string) => setCellPhone(value)}
                />

                <Input 
                    placeholder="Áreas de interesse"
                    value={interestArea}
                    onChangeText={(value: string) => handleInterestAreaChange(value)}
                />
            </ContentInput>

            <ContentSwitch>
                <Text>
                    Trabalho em dupla?
                </Text>
                <Switch
                    trackColor={{false: '#767577', true: '#006494'}}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={wantPair}
                />
            </ContentSwitch>


            <Button 
                onPress={handleRegister}
                title="Enviar"
            />

            
        </Container>
    );
}