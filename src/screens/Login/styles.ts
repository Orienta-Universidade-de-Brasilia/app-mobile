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

  margin: 80px 0;
`