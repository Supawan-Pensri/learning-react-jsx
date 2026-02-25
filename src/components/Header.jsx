import "./Header.css";

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
            <button onClick={toggleTheme}>{theme}</button>
        </nav>
    )
}