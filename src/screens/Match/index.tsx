import { View } from "react-native";
import { HeaderToolBar } from "@components/HeaderToolBar";
import { Container, ContainerText, TextMatch } from "./styles";


export function Match() {
    return (
        <Container>
            <HeaderToolBar />

            <ContainerText>
                <TextMatch>
                    Nenhum match realizado.
                </TextMatch>
            </ContainerText>

        </Container>
    )
}