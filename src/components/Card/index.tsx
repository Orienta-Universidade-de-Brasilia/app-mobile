import { useState } from "react";
import { Image, Text } from "react-native";

import profileImg from '@assets/profile.png';

import { Container, ContentText, Name, TextInterest,
    IconHeart, IconRating, InterestContainer } from "./styles";
    
import {  AirbnbRating } from 'react-native-ratings';
import { Heart } from "phosphor-react-native";

type Props =  {
    name: string;
    interestedArea: string[];
    ratingValue?: number
}

export function Card({ name, interestedArea, ratingValue} : Props) {

    const [isIconActive, setIsIconActive] = useState(false);

    const handleActiveIcon = () => {
        setIsIconActive(!isIconActive);
    };
    
    return (

        <Container>
            <Image 
                source={profileImg} 
                resizeMode="cover"
            />
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
                </InterestContainer>

            </ContentText>

            <IconRating>
                <AirbnbRating 
                    count={3}
                    reviews={["Leve", "Moderada", "Forte"]}
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
        </Container>
    )
}