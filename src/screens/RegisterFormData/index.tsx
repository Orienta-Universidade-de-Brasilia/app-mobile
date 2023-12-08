import { Container, ContentInput, ContentSwitch, ContainerSelect } from "./styles";
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

import Icon from 'react-native-vector-icons/MaterialIcons'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import { useAuth } from "../../hooks/useAuth"

const items = [
    { id: 'Desenvolvimento de Software', name: 'Desenvolvimento de Software' },
    { id: 'Redes de Computadores', name: 'Redes de Computadores' },
    { id: 'Seguranca da Informacao', name: 'Segurança da Informação' },
    { id: 'Inteligencia Artificial', name: 'Inteligência Artificial' },
    { id: 'Aprendizado de Maquina', name: 'Aprendizado de Máquina' },
    { id: 'Ciencia de Dados', name: 'Ciência de Dados' },
    { id: 'Internet das Coisas', name: 'Internet das Coisas (IoT)' },
    { id: 'Computacao em Nuvem', name: 'Computação em Nuvem' },
    { id: 'Desenvolvimento Web', name: 'Desenvolvimento Web' },
    { id: 'Desenvolvimento de Aplicativos Moveis', name: 'Desenvolvimento de Aplicativos Móveis' },
    { id: 'Engenharia de Software', name: 'Engenharia de Software' },
    { id: 'Realidade Virtual e Realidade Aumentada', name: 'Realidade Virtual e Realidade Aumentada' },
    { id: 'Ciberseguranca', name: 'Cibersegurança' },
    { id: 'Banco de Dados e Gerenciamento de Dados', name: 'Banco de Dados e Gerenciamento de Dados' },
    { id: 'Sistemas Embarcados', name: 'Sistemas Embarcados' },
    { id: 'Computacao Grafica', name: 'Computação Gráfica' },
    { id: 'Automacao de Processos', name: 'Automação de Processos' },
    { id: 'Arquitetura de Computadores', name: 'Arquitetura de Computadores' },
    { id: 'Sistemas Operacionais', name: 'Sistemas Operacionais' },
    { id: 'Bioinformatica', name: 'Bioinformática (aplicações de tecnologia na área da biologia)' }
];


export function RegisterFormData() {
    const { user, setUser, login } = useAuth()

    const navigation = useNavigation();
    const route = useRoute();

    function handleGoBack() { navigation.goBack() }

    function formatCellphone(telefone: any) { return telefone.replace(/\D/g, '') }
    

    const [ name, setName ] = useState<string>('');
    const [ lastName, setLastName ] = useState<string>('');
    const [ cellPhone, setCellPhone ] = useState<string>('');
    const [ interestArea, setInterestArea ] = useState<string>('');
    const [ listInterestArea, setListInterestArea ] = useState<string[]>([]);
    const [ wantPair, setWantPair ] = useState(false);
    const [areasInterest, setAreasInterest] = useState([]);
    
    const onSelectAreasInterest = (areasInterest: any) => { setAreasInterest(areasInterest);}

    const toggleSwitch = () => setWantPair(previousState => !previousState);


    async function handleRegister() {

        try {
            await api.put(`/user/${user.id}`, {
                firstName: name,
                lastName: lastName,
                cellPhone: formatCellphone(cellPhone),
                interestedArea: areasInterest,
                availableToPair: wantPair
            });

            login(user.email, user.password);

        } catch {
            console.log('Error')
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
                    isCellphone={true}
                    onChangeText={(value: string) => setCellPhone(value)}
                />

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

                <ContainerSelect>
                    <SectionedMultiSelect
                        modalWithSafeAreaView
                        selectedText='áreas'
                        items={items}
                        IconRenderer={Icon}
                        uniqueKey="id"
                        subKey="children"
                        selectText="Áreas de interesse"
                        showDropDowns={true}
                        onSelectedItemsChange={onSelectAreasInterest}
                        selectedItems={areasInterest}
                        modalWithTouchable
                        confirmText='Confirmar'
                        searchPlaceholderText='Buscar áreas de interesse'
                        styles={{
                            selectToggleText: {
                                //fontSize: '16px',
                                fontWeight: 'bold',
                                color: '#797979',
                              },
                            button: {
                                backgroundColor: '#006494'
                            }
                        }}
                    />
                </ContainerSelect>
            </ContentInput>


            <Button 
                onPress={handleRegister}
                title="Enviar"
            />

            
        </Container>
    );
}