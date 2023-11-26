import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;

  background-color: ${(props) => props.type === 'PRIMARY'  ? props.theme.COLORS.BLUE : props.theme.COLORS.ICE };

  border-radius: 20px;
  border-color: ${(props) => props.type === 'PRIMARY'  ? props.theme.COLORS.BLUE : props.theme.COLORS.BLUE_BLACK };
  border-style: solid;
  border-width: 2px;

  width: 240px;
  min-height: 50px;
  max-height: 50px;

  justify-content: center;
  align-items: center;

  border: 10px solid black;
`;

export const Title = styled(Text) <Props>`
  color: ${ (props) => 
    props.type === 'PRIMARY'  
      ? props.theme.COLORS.WHITE 
      : props.theme.COLORS.BLUE_BLACK };
      
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;


