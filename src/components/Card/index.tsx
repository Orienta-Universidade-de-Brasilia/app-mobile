import { Text } from "react-native";
import { Container, Profile, Title, Content, TextInterest, ContentText } from "./styles";
import profileImg from '@assets/profile.png';
import { Heart } from "phosphor-react-native";


type Props =  {
    name: string;
    interest: string;
}

export function Card({ name, interest } : Props) {
    return (
        <Container>
            <Content>
                <Profile 
                    source={profileImg} 
                    resizeMode="cover"
                />

                <ContentText>
                    <Title>
                        John Lennon
                    </Title>

                    <TextInterest>
                        Interesse: Embarcados, micro-controladores, Desenvolvimento Web;
                    </TextInterest>
                </ContentText>

                <Heart size={20} weight="duotone" />
            </Content>
        </Container>
    )
}