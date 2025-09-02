import { useContext } from "react"
import ThemeContext from "../Context/ThemeContext"
import ThemeTogglerButton from "./ThemeTogglerButton"

export default function MyContainer()
{
    const {theme} = useContext(ThemeContext)
    return(
        <>
            <div className = {`theme-container ${theme}`}>
                <h1>Current Theme : {theme}</h1>
                    <ThemeTogglerButton />                
            </div>
        </>
    )
}