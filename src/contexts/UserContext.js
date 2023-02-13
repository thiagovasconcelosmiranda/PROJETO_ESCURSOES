import React, {createContext, useReducer} from 'react';

import { initialstate, InitialState, UserReducer } from '../reducers/UseReducer';
export const UserContext = createContext();


export default ({children}) => {
     
   
    const [state, dispatch] = useReducer(UserReducer, initialstate);
        return(
    
            <UserContext.Provider value={{state, dispatch}}>
                 {children}
            </UserContext.Provider>
                
            
        );
    }