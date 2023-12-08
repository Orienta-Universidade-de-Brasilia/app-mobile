import HeaderToolBarSvg from "@assets/header-tool-bar-3.svg";
import { View } from "react-native";
import { Container } from "./styles";
import { LogoutButton } from "../LogoutButton";
export function HeaderToolBar() {
    return (
        <Container>
            <LogoutButton />
            <HeaderToolBarSvg />
        </Container>
    )
}