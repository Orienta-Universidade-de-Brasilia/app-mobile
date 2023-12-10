import styled from "styled-components/native"

export const ContainerText = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TextMatch = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${ props  => props.theme.COLORS.GREY};
`

export const Container = styled.View`
    flex: 1;
    background-color: ${ props  => props.theme.COLORS.ICE};
    align-items: center;
`;