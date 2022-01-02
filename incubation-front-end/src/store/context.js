import {useState,createContext} from 'react'

export const TokenContext = createContext(null);


export default function Token ({children}) {
    const [token,setToken]= useState(null)

    return(
        <TokenContext.Provider value={{token,setToken}}>
            {children}
        </TokenContext.Provider>
        )
}   