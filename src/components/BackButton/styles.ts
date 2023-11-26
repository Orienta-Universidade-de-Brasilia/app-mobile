import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native"

export const ButtonGoBack = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  z-index: 100;
  padding-left: 15px;
  margin-top: 50px;
  align-self: flex-start;
`;

export const IconGoBack = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 36,
  color: "#FFFF"
}))``;