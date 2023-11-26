import { Text } from "react-native";
import styled from "styled-components/native";


type Props = {
  color?: 'BLUE' | 'GREEN';
}

export const Container = styled.View`
    flex: 1;
    background-color: ${ props  => props.theme.COLORS.ICE};
    align-items: center;
`;

export const Title = styled(Text) <Props>`
  margin: 110px 0;
  color: ${(props) => props.color == 'BLUE' ? props.theme.COLORS.BLUE_BLACK :  props.theme.COLORS.GREEN };

  font-size: 40px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`

export const ContentButton = styled.View`
  margin-bottom: 20px;
`