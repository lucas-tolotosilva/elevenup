import { useContext, createContext, useState, useEffect } from "react";

const themeContext = createContext(null);

interface childrenProps {
    children: any
}
export default function ThemeContextProvider({ children }: childrenProps) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") != "dark" ? "ligth" : "dark"
    );

    useEffect(() => {
        const root = window.document.documentElement;

        const removeOldTheme = theme === "dark" ? "ligth" : "dark";

        root.classList.remove(removeOldTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return(
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export function useTheme(){
    return useContext(themeContext);
}