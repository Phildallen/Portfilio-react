import {useState} from "react";

const Header = ({activePage, setActivePage}) => {

    const [color,setColor] = useState("top")
    const changeColour = () => {
        if (window.scrollY >= 160) {
            setColor("bottom")
        } else {
            setColor("top")
        }
    }

    window.addEventListener('scroll', changeColour)

    return (
        <>
            <div className={color === "top" ? "header" : "header clearHeader"}>

                <div className="buttonContainer">
                    <p>{window.scrollY}</p>
                    <p>{color}</p>
                    {activePage === "home" ? null :
                    <a href='#home'  onClick={() => setActivePage("home")}><button className="navButton">home</button></a>}
                    {activePage === "about" ? null :
                        <a href='#about'  onClick={() => setActivePage("about")}><button className="navButton">about</button></a>}
                    {activePage === "projects" ? null :
                        <button className="navButton" onClick={() => setActivePage("projects")}>projects</button>}
                    {activePage === "contact" ? null :
                    <a href='#contact'  onClick={() => setActivePage("contact")}><button className="navButton">contact</button></a>}
                </div>
            </div>
        </>
    )
}

export default Header