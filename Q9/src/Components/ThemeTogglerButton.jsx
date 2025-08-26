import { useContext } from "react"
import ThemeContext from "../Context/ThemeContext"
export default function ThemeTogglerButton()
{
    const themeState = useContext(ThemeContext)
   
    return(
        <>
            <button
            className={`theme-button ${themeState.theme}`}
            onClick={() => themeState.setTheme((prev) => prev === "light" ? "dark" : "light")}
            >
                Change Theme
            </button>
        </>
    )
}