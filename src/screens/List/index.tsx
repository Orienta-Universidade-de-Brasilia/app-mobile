import { Container } from "./styles"
import { HeaderToolBar } from "@components/HeaderToolBar";
import { FlatList } from "react-native";
import { Card } from "@components/Card";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { UserRecommended } from "../../dtos/UserRecommended";

export function List() {

    const { user } = useAuth();

    const [usersRecommended, setUsersRecommended] = useState<UserRecommended[]>([]);

    const getRatingValue = (recommendation: string) => {
        switch (recommendation) {
          case 'Not Recommended':
            return 1;
          case 'Neutral':
            return 2;
          case 'Recommended':
            return 3;
          default:
            return 0;
        }
    };
      

    async function getRecommendedUsers() {

        const token = user.accesstoken;

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        
        try {
            const { data } = await api.get('/user', { headers });

            setUsersRecommended(
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
                    recommendationRating: getRatingValue(item.recommendation)
                }
            )))

        } catch (error) {
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
                data={usersRecommended}
                renderItem={({ item }) => (
                    <Card
                        name={item.fullname}
                        interestedArea={item.interestedArea}
                        ratingValue={item.recommendationRating}
                        showRecommend={true}
                        email={item.email}
                    />
                )}
                keyExtractor={item => String(item.id)}
            />
        </Container>

    )
}