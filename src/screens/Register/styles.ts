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

  margin: 80px 0 40px 0;
`

export const ContentValidation = styled.View`
    align-items: center;
`;

export const TextValidation = styled.TextInput`
  flex: 1;

  min-height: 15px;
  max-height: 15px;

  width: 100%;

  font-size: 16px;
  font-weight: bold;

  margin-bottom: 20px;

  color: ${ props  => props.theme.COLORS.RED};
`