import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import SignInput from '../../components/SignInput';
import AsyncStorage from '@react-native-community/async-storage';
import  { UserContext } from '../../contexts/UserContext';

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,

} from './styles';

import Logo from '../../assets/barber.svg';
import EmalIcon from '../../assets/email.svg';
import Api from '../../Api';

export default () => {

   const {dispatch: userDispatch} = useContext(UserContext);
   const [emailField, setemailField] = useState('');
   const [passwordField, setpasswordField] = useState('');
   const navigation = useNavigation();

   const handleSignClick =  async () =>{

      if(emailField != '' && passwordField != ''){
          let json = await Api.signIn(emailField, passwordField);
 
          if(json.token){
             
            await AsyncStorage.setItem('token',json.token);
             userDispatch({
             type: 'setAvatar',
             payload: {
                avatar: json.data.avatar
             }
             });
              navigation.reset({
                
              routes:[{name: 'MainTab'}]

              });
 
          }else{
             alert("Email e/ou senha errados!");
          }
 ;
      }else{
         alert("Espaço em branco!");
         
      }
    }
    
   const handleMessageButtonClick = () =>{

      navigation.reset({
 
         routes: [{name: 'SignUp'}]
 
      });
    }

   return (
      <Container>
         <Logo  width="100%" height="200"/>
         <InputArea>

        <SignInput IconSvg={EmalIcon}
           
           placeholder="Digite um email"
           value = {emailField}
           onChangeText = {t=>setemailField(t)}
        />

        <SignInput
          value = {passwordField}
          onChangeText = {t=>setpasswordField(t)}
          password = {true}
          placeholder="Digite sua senha"/>

          <CustomButton onPress={handleSignClick}>
             <CustomButtonText>Login</CustomButtonText>
          </CustomButton>
         </InputArea>
         <SignMessageButton onPress={handleMessageButtonClick} >
              <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
              <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
         </SignMessageButton>

       </Container>
  
  
   );

}