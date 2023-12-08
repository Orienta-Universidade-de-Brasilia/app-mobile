import styled from "styled-components/native";
import { SignOut } from "phosphor-react-native"

export const ButtonLogout = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  z-index: 100;
  padding-right: 15px;
  margin-top: 60px;
  align-self: flex-end;
`;

export const IconGoOut = styled(SignOut).attrs(({ theme }) => ({
  size: 30,
  color: "#FFFF"
}))``;