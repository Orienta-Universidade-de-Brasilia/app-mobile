import styled from "styled-components/native";

export const ContainerSelect = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 90%;

  align-items: center;

  max-height: 62px;
  margin-top: 20px;
  margin-bottom: 10px;

  border-radius: 20px;
  padding-left: 5px;
  padding-right: 5px;

  background-color: #E3E3E3;
`

export const ContentSelect = styled.View`
    flex: 1;
`

export const IconErase = styled.TouchableOpacity`
    padding: 5px;
    display: flex;
    right: 0;
`

export const Container = styled.View`
    align-items: center;
`

export const ContentFlatList = styled.View`
    max-height: 78%;
`