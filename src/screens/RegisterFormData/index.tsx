import { Header } from "@components/Header";
import { Button } from "@components/Button"
import { Input } from "@components/Input";
import { ScrollView, Switch } from "react-native";
import { Text } from "./styles";
import { BackButton } from "@components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { api } from "../../services/api";

import Icon from 'react-native-vector-icons/MaterialIcons'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import { useAuth } from "../../hooks/useAuth"
import { View } from "react-native";

import { Container, ContentInput, ContentSwitch, ContainerSelect,
         ContentValidation, TextValidation } from "./styles";

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
    { id: 'Bioinformatica', name: 'Bioinformática (aplicações de tecnologia na área da biologia)' },
    { id: 'Design de Interface de Usuário (UI/UX)', name: 'Design de Interface de Usuário (UI/UX)' },
    { id: 'DevOps', name: 'DevOps' },
    { id: 'Engenharia de Dados', name: 'Engenharia de Dados' },
    { id: 'Desenvolvimento Mobile', name: 'Desenvolvimento Mobile' },
    { id: 'Blockchain', name: 'Blockchain' },
    { id: 'Gestão de Projetos de TI', name: 'Gestão de Projetos de TI' },
    { id: 'Automação de Processos', name: 'Automação de Processos' },
    { id: 'Marchine Learning', name: 'Marchine Learning' },
    { id: 'Big Data', name: 'Big Data' },
    { id: 'Arquitetura de Software', name: 'Arquitetura de Software' },
    { id: 'Metodologias Ágeis', name: 'Metodologias Ágeis' },
    { id: 'Paradigmas de Software', name: 'Paradigmas de Software' },
    { id: 'Robótica', name: 'Robótica' },
    { id: 'Business Intelligence (BI)', name: 'Business Intelligence (BI)' },
    { id: 'Testes de Software', name: 'Testes de Software' },
    { id: 'Programação Funcional', name: 'Programação Funcional' },
    { id: 'Computação Quântica', name: 'Computação Quântica' },
    { id: 'Desenvolvimento de Jogos', name: 'Desenvolvimento de Jogos' },
    { id: 'Sistemas Distribuídos', name: 'Sistemas Distribuídos' },
    { id: 'Chatbots', name: 'Chatbots' },
    { id: 'Design de Algoritmos', name: 'Design de Algoritmos' },
    { id: 'Computação Sem Servidor (Serverless)', name: 'Computação Sem Servidor (Serverless)' },
    { id: 'Análise de Desempenho de Aplicações', name: 'Análise de Desempenho de Aplicações' }
];

export function RegisterFormData() {
    const { user } = useAuth()

    const navigation = useNavigation();

    function handleGoBack() { navigation.goBack() }

    function formatCellphone(telefone: any) { return telefone.replace(/\D/g, '') }

    const [ name, setName ] = useState<string>('');
    const [ lastName, setLastName ] = useState<string>('');
    const [ cellPhone, setCellPhone ] = useState<string>('');
    const [ wantPair, setWantPair ] = useState(false);
    const [ areasInterest, setAreasInterest ] = useState([]);

    const [ listError, setListError ] = useState<string[]>([]);

    
    const onSelectAreasInterest = (areasInterest: any) => { setAreasInterest(areasInterest);}

    const toggleSwitch = () => setWantPair(previousState => !previousState);

    function validateRegister() {

        let newErrors = [];

        if(name == '')
            newErrors.push('Preencha o campo Nome.');
            
        if(lastName == '')
            newErrors.push('Preencha o campo Sobrenome.');

        if(cellPhone == '')
            newErrors.push('Preencha o campo Telefone.');

        if(areasInterest.length < 3)
            newErrors.push('Por favor, escolha pelo menos três áreas de interesse.');

        if(newErrors.length == 0) {
            handleRegister();
        }

        setListError(newErrors);
    }

    async function handleRegister() {

        try {
            await api.put(`/user/${user.id}`, {
                firstName: name,
                lastName: lastName,
                cellPhone: formatCellphone(cellPhone),
                interestedArea: areasInterest,
                availableToPair: wantPair
            });

            navigation.navigate('terms');

        } catch {
            console.log('Error')
        }
    }

    
    return (
        <ScrollView>
            <Container>
                <Header />

                {/* <BackButton onPress={handleGoBack} /> */}

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

                    {listError.length > 0 ? 
                        <ContentValidation>
                            {listError.map((error, index) => (
                                <TextValidation key={index}>
                                    {error}
                                </TextValidation>
                            ))}
                        </ContentValidation>
                        : ''
                    }


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

                <View style={{ marginBottom: 60 }}>
                    <Button 
                        onPress={validateRegister}
                        title="Enviar"
                    />
                </View>

            </Container>
        </ScrollView>
    );
}