import {useState} from "react";

const Header = ({activePage, setActivePage}) => {

    const [transparency,setTransparency] = useState("top")
    
    const changeTransparency = () => {
        if (window.scrollY >= 160) {
            setTransparency("bottom")
        } else {
            setTransparency("top")
        }
    }

    window.addEventListener('scroll', changeTransparency)

    return (
        <>
            <div className={transparency === "top" ? "header" : "header clearHeader"}>

                <div className="buttonContainer">
                    {/*<p>{window.scrollY}</p>*/}
                    {/*<p>{transparency}</p>*/}
                    <p>{activePage}</p>
                    {activePage === "home" ? null :
                    <a href='#home'  onClick={() => setActivePage("home")}><button className={transparency === "top" ? "navButton" : "navButton invertedColour"}>home</button></a>}
                    {activePage === "about" ? null :
                        <a href='#about'  onClick={() => setActivePage("about")}><button className={transparency === "top" ? "navButton" : "navButton invertedColour"}>about</button></a>}
                    {activePage === "projects" ? null :
                        <button className={transparency === "top" ? "navButton" : "navButton invertedColour"} onClick={() => setActivePage("projects")}>projects</button>}
                    {activePage === "contact" ? null :
                    <a href='#contact'  onClick={() => setActivePage("contact")}><button className={transparency === "top" ? "navButton" : "navButton invertedColour"}>contact</button></a>}
                </div>
            </div>
        </>
    )
}

export default Header