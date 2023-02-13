import React, {useContext} from 'react';
import styled from 'styled-components/native';
import { UserContext } from '../contexts/UserContext';

import HomeIcon from '../assets/home.svg';
import Search from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import Favorite from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';


const TabArea = styled.View`
height: 60px;
background-color: #4EADBE;
flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
 flex: 1;
 justify-content: center;
 align-items: center;


`;

export default ({state, navigation}) => {
    const {state:user} = useContext(UserContext);

    const goTo = (screenName) => {

        navigation.navigate(screenName);

    }

    const TabItemCenter = styled.TouchableOpacity`
    width:70px;
    height:70px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
    `;
     const AvatarIcon = styled.Image`
     width:24px;
     height: 24px;
     border-radius: 12px;
     
     `;

    return(
        <TabArea>
            <TabItem onPress={ () =>goTo('Home')}>
               <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="30" height="30" fill= "#FFFFFF" />
            </TabItem>
            <TabItem onPress={ () =>goTo('Search')}>
               < Search  style={{opacity: state.index===1? 1 : 0.5}} width="30" height="30" fill= "#FFFFFF" />
            </TabItem>
            <TabItemCenter onPress={ () =>goTo('Appointments')}>
               < TodayIcon style={{opacity: state.index===2? 1 : 0.5}} width="50" height="50" fill= "black" />
            </TabItemCenter>
    
            <TabItem onPress={ () =>goTo('Favorites')}>
               < Favorite  style={{opacity: state.index===3? 1 : 0.5}} width="30" height="30" fill= "#FFFFFF" />
            </TabItem>
            <TabItem onPress={ () =>goTo('Profile')}>
                {user.avatar != '' ?
                     <AvatarIcon source={{uri: user.avatar}}/>
                :
                <AccountIcon  style={{opacity: state.index===4? 1 : 0.5}} width="30" height="30" fill= "#FFFFFF" />
                }
            </TabItem>
            
        </TabArea>

    );
}

