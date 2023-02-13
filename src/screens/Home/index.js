import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, RefreshControl} from 'react-native';
import Api from '../../Api';



import SearchIncon from '../../assets/lupa.svg'

import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import { Container,
         Scroller, 

         HederArea,
         HederTitle,
         SearchButton, 

         LocationArea, 
         LocationInput, 
         LocationFinder, 

         LoadingIcon,
         ListArea

} from './styles';
import BarberItem from '../../components/BarberItem';

import SearchIcon from '../../assets/search.svg';
import Localization from '../../assets/my_location.svg';


export default () => {
const navigation = useNavigation();

const [LocationText, setLocationText ] = useState('');
const [coords, setCoods] = useState(null);
const [loading, setLoading] = useState(false);
const [list, setList] = useState([]);
const [refreshing ,setRefreshing] = useState(false);

const handleLocationFinder = async () =>{ 
setCoods(null);
   let result = await request(

     Platform.OS ==='ios' ?
     PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
     :
     PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION

   );
if(result == 'granted'){

    setLoading(true);
    setLocationText('');
    setList([]);
     Geolocation.getCurrentPosition((info)=>{
     
        setCoods(info.coords);
        getBarbers();
        
    });
   }
}

 const getBarbers = async () =>{
    setLoading(true);
    setList([]);
    let lat = null;
    let lng = null
    
    
    if(coords){
     lat = coords.latitude;
     lng = coords.longtude;
    }
  
    let res = await Api.getBarbers(lat, lng, LocationText);
    if(res.error == ''){
      if(res.loc){
         setLoading(false);
         setLocationText(res.loc);

      }

      setList(res.data);
      
    }else{

        alert("Erro: " + res.error);
    }

}

   useEffect(() =>{

    getBarbers();
   }, []);


  const onRefresh = () =>{
   setRefreshing(true);
   getBarbers();


  }

  const handleLocationSearch = () => {
    setCoods({});
    getBarbers();
    
  }

    return(
        <Container>
          <Scroller refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
              <HederArea>
                  <HederTitle numberOflines={2}>Encontre o seu barbeiro favorito</HederTitle>
                  <SearchButton onPress={()=>navigation.navigate('Search')} >
                      <SearchIcon  width="30" height="30" fill="#FFFFFF"/>
                  </SearchButton>
              </HederArea>
            <LocationArea>
                <LocationInput
                   placeholder="Onde você está?"
                   placeholderTextColor="#FFFFFF"
                   value={LocationText}
                   onChangeText={t=>setLocationText(t)}
                   onEndEditing={handleLocationSearch}
                />    
                <LocationFinder  onPress={handleLocationFinder}>
                <Localization width="24" height="24" fill= "#FFFFFF"/>
                </LocationFinder>
            </LocationArea>
            { loading && 
              
              <LoadingIcon size="large" color="#FFF" />
            }

            <ListArea>
              {list.map((item, k)=>(
                  <BarberItem key={k} data ={item}/>
              ))}
            </ListArea>  

          </Scroller>
        </Container>



    );
}