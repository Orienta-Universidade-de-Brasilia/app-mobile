import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native"


export const Container = styled.View`
  flex-direction: row;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  z-index: 100;
  padding-left: 15;
  margin-top: 40;
  align-self: flex-start;
`;

export const IconGoBack = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 36,
  color: "#FFFF"
}))``;

export const LogoUnB = styled.Image`
  width: 100%;
`;

