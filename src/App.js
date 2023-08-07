import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import './App.css';
import "./components/css/index.css"
import Header from "./components/Header";
import Home from "./components/Home";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Projects from "./components/Projects";

library.add(fab, faEnvelope, faLinkedin, faGithub)


const App = () => {
    const [activePage, setActivePage] = useState("home")
    const [elementPositions, setElementPositions] = useState({"home": 240, "about": 500, "contact": 1300})

    const setActivePageOnHomePage = () => {
        if (activePage !== "projects") {
            if (window.scrollY < elementPositions.home) {
                setActivePage("home")
            }
            if (window.scrollY >= (window.document.body.offsetHeight - window.innerHeight) - 100) {
                setActivePage("contact")
            }
            if (window.scrollY >= elementPositions.home && window.scrollY < (window.document.body.offsetHeight - window.innerHeight) - 100) {
                setActivePage("about")
            }
        } else {
            setActivePage("projects")
        }
    }

    window.addEventListener('scroll', setActivePageOnHomePage)


    return (
        <>
            <Header setActivePage={setActivePage}
                    activePage={activePage}/>
            {activePage === "projects" ? <Projects/> : <Home setActivePage={setActivePage}
                                                             setElementPositions={setElementPositions}
                                                             elementPositions={elementPositions}/>}
        </>
    )
}

export default App;
