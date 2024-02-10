import React, { createContext, useState } from 'react';

export const context=createContext()
const Context = ({children}) => {
    const [users,setUsers]=useState([])

     const info={
        users,
        setUsers
     }
    return (
        <context.Provider value={info}>
        {children}
        </context.Provider>
    );
};

export default Context;