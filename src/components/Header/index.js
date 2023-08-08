import {useState} from "react";

const Header = ({activePage, setActivePage, homePageVisible,elementPositions}) => {

    const [transparency,setTransparency] = useState(0)
    
    const changeTransparency = () => {
        if (activePage === "home") {
            window.scrollY > elementPositions.home - 100 ? setTransparency(1) : setTransparency(0)
        }
        if (activePage === "projects") {
            window.scrollY > elementPositions.projects - 120 ? setTransparency(1) : setTransparency(0)
        }
            }

    window.addEventListener('scroll', changeTransparency)

    const openProjects = () => {
        setActivePage("projects")
        window.scrollTo({top:0})
    }

    return (
        <>
            <div className={transparency === 0 ? "header" : "header clearHeader"}>

                <div className="buttonContainer">
                    {/*<p>{window.scrollY}</p>*/}
                    {/*<p>{activePage}</p>*/}
                    {/*<p>{homePageVisible.home}{homePageVisible.about}{homePageVisible.contact}</p>*/}
                    {homePageVisible.home === 1 ? null :
                    <a href='#home'  onClick={() => setActivePage("home")}><button className={transparency === 0 ? "navButton" : "navButton invertedColour"}>home</button></a>}
                    {homePageVisible.about === 1 ? null :
                        <a href='#about'  onClick={() => setActivePage("home")}><button className={transparency === 0 ? "navButton" : "navButton invertedColour"}>about</button></a>}
                    {homePageVisible.contact === 1 ? null :
                    <a href='#contact'  onClick={() => setActivePage("home")}><button className={transparency === 0 ? "navButton" : "navButton invertedColour"}>contact</button></a>}
                    {activePage === "projects" ? null :
                        <button className={transparency === 0 ? "navButton" : "navButton invertedColour"} onClick={() => openProjects()}>projects</button>}

                </div>
            </div>
        </>
    )
}

export default Header