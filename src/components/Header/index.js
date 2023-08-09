import {useState} from "react";

const Header = ({activePage, setActivePage, homePageVisible, elementPositions}) => {

    const [transparency, setTransparency] = useState(0)

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
        window.scrollTo({top: 0})
    }

    const openHome = (e) => {
        setActivePage("home")
        window.scrollTo({top: elementPositions[e]})

    }

    return (<>
            <div className={transparency === 0 ? "header" : "header clearHeader"}>
                <div className="buttonContainer">
                    {homePageVisible.home === 1 ? null : <a onClick={() => openHome("top")}>
                        <button className={transparency === 0 ? "navButton" : "navButton invertedColour"}>home
                        </button>
                    </a>}
                    {homePageVisible.about === 1 ? null : <a onClick={() => openHome("about")}>
                        <button className={transparency === 0 ? "navButton" : "navButton invertedColour"}>about
                        </button>
                    </a>}
                    {homePageVisible.contact === 1 ? null : <a onClick={() => openHome("contact")}>
                        <button className={transparency === 0 ? "navButton" : "navButton invertedColour"}>contact
                        </button>
                    </a>}
                    {activePage === "projects" ? null :
                        <button className={transparency === 0 ? "navButton" : "navButton invertedColour"}
                                onClick={() => openProjects()}>projects</button>}

                </div>
            </div>
        </>)
}

export default Header