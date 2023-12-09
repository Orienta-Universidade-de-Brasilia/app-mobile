import styled from "styled-components/native";

export const Profile = styled.Image`
    /* width: 50px;
    height: 50px;
    margin-right: 10px; */
`
export const TextInterest = styled.Text`
  color: #959595;
  font-size: 10px;
  margin-top: 8px;
`

export const ContentText = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
`

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    
    background-color: white;
    border-radius: 6px;
    margin: 8px 10px;
    padding: 10px;

    border-bottom-width: 2px;
    border-bottom-color: #1B98E0;
    border-bottom-style: solid;

    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.3;
    shadow-radius: 2px;

    min-height: 90px;
`;

export const Name = styled.Text`
 font-size: 18px;
 font-weight: bold;
`;

export const InterestContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 85%;

    //border: 1px solid red;
`;

export const IconHeart = styled.TouchableOpacity`
    position: absolute;
    z-index: 100;
    right: 15px;
    top: 50%;

    padding: 8px;
`

export const IconRating = styled.TouchableOpacity`
    position: absolute;
    z-index: 100;
    right: 5px;
    top: -5px;
`