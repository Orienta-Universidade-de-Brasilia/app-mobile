import styled from "styled-components/native";

export const Profile = styled.Image`
    
`
export const Title = styled.Text`
  color: #959595;
  font-size: 16px;
  font-weight: bold;
`;

export const TextInterest =  styled.Text`
  color: #959595;
  font-size: 8px;
  margin-top: 8px;
`

export const Content = styled.View`
  //border: 1px solid red;

  flex-direction: row;
  width: 94%;
  justify-content: center;
  align-items: center;
`

export const ContentText = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
`

export const Container = styled.View`
  flex: 1;

  background-color: #FFFF;

  border-radius: 8px;
  //border-color: ${(props) => props.type === 'PRIMARY'  ? props.theme.COLORS.BLUE : props.theme.COLORS.BLUE_BLACK };
  //border-style: solid;
  //border-width: 2px;

  width: 94%;
  min-height: 85px;
  max-height: 85px;

  justify-content: center;
  align-items: center;

  //border: 10px solid black;
  border-bottom-width: 2px;
  border-bottom-color: #1B98E0;
  border-bottom-style: solid;

  margin-top: 15px;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  margin-left: 10px;
`;