
// import ThemeContext 
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({children}) => {
    const[theme, steTheme] = useState(() => {
        return localStorage.getItem('themeKey') || 'light'
    })

    const toggleTheme = () => {
        if(theme === 'light'){
            steTheme('dark')
        }else{
            steTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('themeKey', theme)

        document.body.className = theme;
    })


    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}