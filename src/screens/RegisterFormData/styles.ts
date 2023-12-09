import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${ props  => props.theme.COLORS.ICE};
    align-items: center;
`;


export const ContentInput = styled.View`
    width: 80%;
    align-items: center;
    justify-content: center;

    margin: 80px 0px 0px 0px;
`

export const ContentSwitch = styled.View`
    justify-content: space-between;
    width: 100%;

    flex-direction: row;
    align-items: center; 
`

export const Text = styled.Text`
    font-size: 16px;
    font-weight: bold;

    color: ${ props  => props.theme.COLORS.GREY};

    margin-right: 20px;
`

export const ContainerSelect = styled.View`
  width: 100%;

  display: flex;
  
  background-color: ${ props  => props.theme.COLORS.ICE};

  padding-bottom: 20px;
`

export const ContentValidation = styled.View`
    align-items: center;
`;

export const TextValidation = styled.TextInput`
  flex: 1;

  min-height: 15px;
  max-height: 15px;

  width: 100%;

  font-size: 12px;
  font-weight: bold;

  margin-bottom: 5px;
  margin-top: 5px;

  color: ${ props  => props.theme.COLORS.RED};
`