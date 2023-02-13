import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


import Stars from '../components/Stars';

const Area = styled.TouchableOpacity`
  background-color: #FFFFFF;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;


`;

const Avatar = styled.Image`
 width: 70px;
 height:70px;
 border-radius:20px;
`;

const InfoArea = styled.View`
margin-left: 20px;
justify-content: space-between;

`;

const UserName = styled.Text`
   font-size: 17px;
   font-weight: bold;
`;

const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4EADBE;
  border-radius: 10px;
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
font-size: 13px;
color: #268596;
`;

export default ({data}) =>{
 const navigation = useNavigation();

 const handleClick = () =>{
   navigation.navigate('Barber',{

    id: data.id,
    avatar: data.avatar,
    name: data.name,
    start: data.stars

   });
   
  
 }


    return(
 <Area onPress={handleClick}>
    <Avatar source={{uri: data.avatar}}/>
    <InfoArea>
         <UserName>{data.name}</UserName>
         <Stars stars={data.stars} showNumber={true}/>
         <SeeProfileButton>
             <SeeProfileButtonText>Ver perfil</SeeProfileButtonText>
         </SeeProfileButton>
     </InfoArea>
</Area>


    );
}