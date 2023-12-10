import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${ props  => props.theme.COLORS.ICE};
    align-items: center;
    justify-content: center;
`;

export const ContainerCheckBox = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px; 
`;

export const ContentCheckbox = styled.View`
    margin-right: 10px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 600;
`;

export const ContentText = styled.View`

    flex: 1;
    max-height: 400px;
    min-height: 400px;

    flex-direction: row;
    max-width: 82%;

    margin: 30px 0px;

    padding: 10px;

    background-color: #F5FEFF;

    border-radius: 5px;
`

export const TextInformation = styled.Text`
    color: red;

    margin-top: -15px;
    margin-bottom: 20px;
`

