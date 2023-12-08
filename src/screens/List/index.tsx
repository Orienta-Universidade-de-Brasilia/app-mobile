import { Toolbar, Container } from "./styles"
import { HeaderToolBar } from "@components/HeaderToolBar";
import { FlatList } from "react-native";
import { Card } from "@components/Card";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { UserRecommended } from "../../dtos/UserRecommended";

export function List() {

    const { user } = useAuth();

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72x',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d7as',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f6-145571e29das7as',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-b45571ase29d7as',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1as-471f-b45571e29d7as',
          title: 'Third Item',
        },
        {
          id: 'asda0f-3da1as-471f-b45571e29d7as',
          title: 'Third Item',
        }
    ]

    async function getRecommendedUsers() {

      const token = user.accesstoken;

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      console.log(headers)
      try {
        const { data } = await api.get('/user', { headers });
        
        const usersRecommended: UserRecommended[] = data.map((item: any) => ({
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
        }));

        console.log(usersRecommended);

      } catch(error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getRecommendedUsers();
    }, []);

    return (
        <Container>
            <HeaderToolBar />

            <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <Card />
                )}
                keyExtractor={item => item.id}
            />

        </Container>

    )
}