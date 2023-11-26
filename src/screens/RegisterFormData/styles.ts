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
    width: 80%;

    flex-direction: row;
    align-items: center; 

    padding-bottom: 40px;
`

export const Text = styled.Text`
    font-size: 18px;
    font-weight: bold;

    color: ${ props  => props.theme.COLORS.GREY};

    margin-right: 20px;
`