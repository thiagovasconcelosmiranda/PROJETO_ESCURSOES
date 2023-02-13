import React  from 'react';

import styled from 'styled-components/native';

import StarFull from '../assets/star.svg';
import StarHalf from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty.svg';

const StarArea = styled.View`
  flex-direction: row;
`;

const StarView = styled.View`
width:20px;
`;

const StarText = styled.Text`
font-size: 10px;
font-weight: bold;
margin-left: 10px;
color; #737373;
`;

export default ({stars, showNumber}) => {
let s = [0,0,0,0,0];
let floor = Math.floor(stars); //Converte para números inteiros
let left = stars - floor;


for( var i=0; i<floor; i++){
  s[i] = 2;
}

if(left > 0){
  s[i] =1;
}

    return (
      <StarArea>
         {s.map((i, k) =>(
             <StarView key={k}>
                {i=== 1 && <StarEmpty widht="18" height="18" fill="#FF9200"/>}
                {i=== 0 && <StarHalf widht="10" height="18" fill="#FF9200"/>}
                {i=== 2 && <StarFull widht="18" height="18" fill="#FF9200"/>}
             </StarView>
             
         ))}
          {showNumber && <StarText>{stars}</StarText>}
      </StarArea>
    );
}