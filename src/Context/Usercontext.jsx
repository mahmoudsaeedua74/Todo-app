import React, {  createContext,  useState } from 'react'
export let userContext = createContext()

export default function Usercontext({ children }) {
  const [items, setitem] = useState(localStorage.getItem("items")== null ? [] : JSON.parse(localStorage.getItem("items")))
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <>
      <userContext.Provider  value={{ items, setitem, isDarkMode, setIsDarkMode}}>

        {children}

  
      </userContext.Provider>
    </>
  )
}
