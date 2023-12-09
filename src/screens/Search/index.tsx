import { useEffect, useState } from "react";
import { HeaderToolBar } from "@components/HeaderToolBar";

import { ContainerSelect, IconErase, ContentSelect, Container, ContentFlatList } from "./styles";

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { XCircle } from "phosphor-react-native";

import { UserRecommended } from "../../dtos/UserRecommended";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { FlatList } from "react-native";
import { Card } from "../../components/Card";

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

export function Search() {
    const { user } = useAuth();

    const [area, setArea] = useState([]);
    const [usersFiltered, setUsersFiltered] = useState<UserRecommended[]>([]);
    
    const onSelectAreasInterest = (areasInterest: any) => { setArea(areasInterest);}
    const eraseArea = () => setArea([]);

    async function getFilteredUsers() {

        const token = user.accesstoken;

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const params = {
            search: area[0],
        };
        
        try {
            let response;

            if (area.length) {
                response = await api.get('/user', { headers, params });
            } else {
                response = await api.get('/user', { headers });
            }

            const data = response.data;

            setUsersFiltered(
                data.map((item: any) => ({
                    id: item.id,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    fullname: item.fullName,
                    email: item.email,
                    cellPhone: item.cellPhone,
                    type: item.userType.description,
                    interestedArea: item.interestedArea,
                    recommendation: item.recommendation,
                    recommendationValue: item.recommendationValue,
                }
            )))

            console.log(usersFiltered);

        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(() => {
        getFilteredUsers()
    }, [])

    useEffect(() => {
        getFilteredUsers()
    }, [area])

    return (
        <Container>
            <HeaderToolBar />

            <ContainerSelect>

                <ContentSelect>
                    <SectionedMultiSelect
                        modalWithSafeAreaView
                        single={true}
                        items={items}
                        IconRenderer={Icon}
                        uniqueKey="id"
                        subKey="children"
                        selectText="Buscar outros usuários"
                        showDropDowns={true}
                        onSelectedItemsChange={onSelectAreasInterest}
                        selectedItems={area}
                        modalWithTouchable
                        confirmText='Confirmar'
                        searchPlaceholderText='Buscar áreas de interesse'
                        styles={{
                            selectToggleText: {
                                fontWeight: 'bold',
                                color: '#797979',
                                },
                            button: {
                                backgroundColor: '#006494'
                            }
                        }}
                    />
                </ContentSelect>

                <IconErase onPress={eraseArea}>
                    <XCircle size={32} />
                </IconErase>

            </ContainerSelect>
        
            <ContentFlatList>
                <FlatList
                    data={usersFiltered}
                    renderItem={({ item }) => (
                        <Card
                            name={item.fullname}
                            interestedArea={item.interestedArea}
                            ratingValue={item.recommendationRating}
                            showRecommend={false}
                            email={item.email}
                            type={item.type == 'STUDENT' ? 'ALUNO' : 'PROFESSOR'}
                        />
                    )}
                    keyExtractor={item => String(item.id)}
                    horizontal={false}
                />
            </ContentFlatList>
            
        </Container>
    )
}