import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const InputArea = styled.View`

   width:100%;
   height: 70px;
   background-color: #83D6E3;
   flex-direction: row;
   border-radius: 30px;
   padding: 15px;
   margin-left:10px;
   align-items:center;
   margin-bottom: 15px;
`;


const Input = styled.TextInput`
flex: 1;
font-size:16px;
color: #268596;
margin-left:10px;
`;
export default ({IconSvg, placeholder, value, onChangeText, password}) => {
   return (
       <InputArea>
    
           <Input
           placeholder = {placeholder}
           value = {value}
           onChangeText = {onChangeText}
           secureTextEntry ={password}
           />
       </InputArea>
   );
    
}