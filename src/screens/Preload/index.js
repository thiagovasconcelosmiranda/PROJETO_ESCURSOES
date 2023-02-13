import React , {useEffect, useContext} from 'react';
import {Container,  LogingIcon} from '../Preload/styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import  { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';

import Logo from '../../assets/barber.svg';

export default () => {
   const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(()=>{
      const checkToken = async() => {

       const token = await AsyncStorage.getItem('token');
       if(token){
         
       let res = await Api.checkToken(token);
       
       if(res.token){

         await AsyncStorage.setItem('token', res.token);

         
         
         navigation.reset({
            
           routes:[{name: 'MainTab'}]

           });

       }else{
          navigation.navigate('SignIn');
       }

       }else{
          navigation.navigate('SignIn');
       }
      }
      
      checkToken();
       
    }, []);
   return (

      <Container>
         <Logo  width="100%" height="210"/>
         <LogingIcon size="large" color="#FFFFFF"/>
       </Container>
  
  
   );

}