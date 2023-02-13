import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import  { UserContext } from '../../contexts/UserContext';

import {
    
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold


} from './styles';
import Api from '../../Api';

import SignInput from '../../components/SignInput';
import Logo from '../../assets/barber.svg';

export default () =>{
   const {dispatch: userDispatch} = useContext(UserContext);
   
   const [emailField, setemailField] = useState('');
   const [passwordField, setpasswordField] = useState('');
   const [nameField, setnameField] = useState('');
   const navigation = useNavigation();

   const handleSignClick = async () =>{
      if(nameField !='' && emailField !=''  &&  passwordField !=''){
          let res = await Api.signUp(nameField, emailField, passwordField);

          if(res.token){
            await AsyncStorage.setItem('token',res.token);
             userDispatch({
             type: 'setAvatar',
            payload: {
                avatar: res.data.avatar
             }
             });
             navigation.reset({
                
               routes:[{name: 'MainTab'}]
 
               });


          }else{
              alert('Error: ' +res.error);
          }
      }else{
        alert("Preencha os campos!"); 
      }

   }

   const handleMessageButtonClick = () =>{
     navigation.reset({
        routes: [{name: 'SignIn'}]
     });
   }
    return (
        <Container>
            <Logo  width="100%" height="110"/>
            <InputArea>
            <SignInput
                  placeholder="Digite o seu nome"
                  value = {nameField
            }
                  onChangeText = {t=>setnameField(t)}
                  />
                  
                  <SignInput
                  placeholder="Digite o seu email"
                  value = {emailField}
                  onChangeText = {t=>setemailField(t)}
                  />
                  <SignInput
                   placeholder="Digite sua senha"
                   value = {passwordField}
                   onChangeText = {t=>setpasswordField(t)}
                   password = {true}
                   />

                  <CustomButton onPress={handleSignClick}>
                      <CustomButtonText>Cadastrar</CustomButtonText>
                  </CustomButton>
            </InputArea>


            <SignMessageButton onPress={handleMessageButtonClick}>
                
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
                </SignMessageButton>
        </Container>
    );
    

}

