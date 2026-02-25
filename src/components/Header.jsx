import "./Header.css";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

export default function Header({title,theme,setTheme})  {

    function toggleTheme(){
        if(theme === "light") {
            setTheme("dark")
        }
        else{
            setTheme("light")
        }

    }
    return(
        <nav>
            <h1>{title}</h1>
            <span onClick={toggleTheme}>{theme === "light"? <MdSunny size={25} /> : <IoIosMoon size={25} />}</span>

        </nav>
    )
}