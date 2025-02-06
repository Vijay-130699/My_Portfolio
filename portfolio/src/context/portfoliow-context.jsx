import React, { createContext, useState } from 'react'

const INIT_VALUES ={
  changeContent:false,
  isFading :false
}


const PortfolioContext = createContext(INIT_VALUES)


export const PortfolioContextProvider = ({children}) => {
  const [changeContent, setChangeContent] = useState(false)
  const [isFading, setIsFading] = useState(false)
  return (
    <PortfolioContext.Provider  value={{changeContent,isFading,setChangeContent,setIsFading}}>
        {children}
    </PortfolioContext.Provider>
  )
}


export default PortfolioContext