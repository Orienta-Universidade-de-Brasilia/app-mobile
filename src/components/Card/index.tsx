import { useState } from "react";
import { Image, Text } from "react-native";

import profileImg from '@assets/profile.png';

import { Container, ContentText, Name, TextInterest, ContentTypeUser,
    IconHeart, IconRating, InterestContainer, ContentUser, TextTypeUser } from "./styles";
    
import {  AirbnbRating } from 'react-native-ratings';
import { Heart } from "phosphor-react-native";

type Props =  {
    name: string;
    interestedArea: string[];
    ratingValue?: number;
    showRecommend: boolean;
    email: string;
    type: string;
}

export function Card({ name, interestedArea, ratingValue, showRecommend, email, type} : Props) {

    const [isIconActive, setIsIconActive] = useState(false);

    const handleActiveIcon = () => {
        setIsIconActive(!isIconActive);
    };
    
    return (

        <Container>

            <ContentUser>

                <Image source={profileImg} resizeMode="cover"/>

                <ContentTypeUser>
                    <TextTypeUser>{type}</TextTypeUser>
                </ContentTypeUser>
                
            </ContentUser>

            
            <ContentText>

                <Name>
                    { name.length > 20 ? 
                        name.split(' ').slice(0, 2).join(' ') : 
                        name}
                </Name>

                <InterestContainer>
                    <TextInterest>
                        <Text style={{ fontWeight: 'bold' }}>Áreas de Interesse:</Text> {interestedArea.map((area, index) => (
                                    index < interestedArea.length - 1 ? `${area}; ` : `${area}.`))}
                    </TextInterest>

                    <TextInterest>
                        <Text style={{ fontWeight: 'bold' }}>Email:</Text> {email}
                    </TextInterest>
                </InterestContainer>

            </ContentText>

            { showRecommend ?
                <>
                    <IconRating>
                        <AirbnbRating 
                            count={3}
                            reviews={["Baixa", "Moderada", "Alta"]}
                            defaultRating={ratingValue}
                            size={12}
                            reviewSize={8}
                            starContainerStyle={{ marginTop: -10, marginBottom: -2 }}
                        />
                    </IconRating>

                    <IconHeart onPress={handleActiveIcon}>
                        <Heart size={20} 
                            weight={isIconActive ? "fill" : "duotone"} 
                            color={isIconActive ? "red": ""}
                        />
                    </IconHeart> 
                </> : ''
            }
        </Container>
    )
}