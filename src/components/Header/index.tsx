import { Container, LogoUnB } from "./styles";
import headerImg from '@assets/header.png';

export function Header() {
    return (
        <Container>
            <LogoUnB 
                source={headerImg} 
                resizeMode="cover"
            />
        </Container>
    )
};