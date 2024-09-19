import { createContext } from "react";
import { useState } from "react";

export const DarkModeContext = createContext()

export function DarkModeProvider({children}) {

  const [darkModeToggle, setDarkModeToggle] = useState(true)

  function handleDarkModeToggle() {
    setDarkModeToggle(prevDarkMode => !prevDarkMode)
  }

  return (
    <DarkModeContext.Provider value={{
      darkModeToggle,
      handleDarkModeToggle
    }}>
      {children}
    </DarkModeContext.Provider>
  )
}