import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faDownload, faLink} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import './App.css';
import "./components/css/index.css"
import Header from "./components/Header";
import Home from "./components/Home";
import {useEffect, useState} from "react";
import Projects from "./components/Projects";

library.add(fab, faEnvelope, faDownload, faLink, faLinkedin, faGithub)


const App = () => {
    const [activePage, setActivePage] = useState("home")
    const [homePageVisible, setHomePageVisible] = useState({"home": 1, "about": 1, "contact": 0})
    const [elementPositions, setElementPositions] = useState({
        "top": 0, "home": 240, "about": 500, "contact": 1300, "projects": 200
    })

    const setActivePageOnHomePage = () => {
        const updateHomePageVisible = {...homePageVisible}
        if (activePage === "projects") {
            updateHomePageVisible.home = 0
            updateHomePageVisible.about = 0
            updateHomePageVisible.contact = 0
        }
        if (activePage === "home") {
            let bottomY = window.scrollY + window.innerHeight
            window.scrollY < elementPositions.home ? updateHomePageVisible.home = 1 : updateHomePageVisible.home = 0
            window.scrollY < elementPositions.about && bottomY > elementPositions.about ? updateHomePageVisible.about = 1 : updateHomePageVisible.about = 0
            window.scrollY < (elementPositions.contact) && bottomY > elementPositions.contact ? updateHomePageVisible.contact = 1 : updateHomePageVisible.contact = 0
        }
        setHomePageVisible(updateHomePageVisible)
    }

    window.addEventListener('scroll', setActivePageOnHomePage)

    useEffect(() => {
        setActivePageOnHomePage()
    }, [activePage])

    return (<>
            <Header setActivePage={setActivePage}
                    activePage={activePage}
                    setHomePageVisible={setHomePageVisible}
                    homePageVisible={homePageVisible}
                    elementPositions={elementPositions}
                    setActivePageOnHomePage={setActivePageOnHomePage}/>
            {activePage === "projects" ? <Projects setElementPositions={setElementPositions}
                                                   elementPositions={elementPositions}/> :
                <Home setElementPositions={setElementPositions}
                      elementPositions={elementPositions}/>}
        </>)
}

export default App;
