import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #63C2D1;
`;

export const Scroller = styled.View`
flex: 1;
padding:20px;
`;

export const HederArea = styled.SafeAreaView`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
export const HederTitle = styled.Text`
width: 250px;
font-size: 24px;
font-weight: bold;
color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
 width: 46px;
 height: 56px;
`;

export const LocationArea = styled.View`
background-color:#4EADBE;
height: 60px;
border-radius:30px;
flex-direction: row;
align-items: center;
padding-left: 30px;
padding-right:30px;
margin-top:30px;
`;

export const LocationInput = styled.TextInput`
flex:1;
font-size: 26px;
color: #FFFFFF;
`;

export const LocationFinder = styled.TouchableOpacity`
width:34px;
height: 24px;
`;
export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px;
`;

export const ListArea = styled.View`
margin-top: 30px;
margin-bottom: 30px;
`;

