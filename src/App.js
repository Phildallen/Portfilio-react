
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import './App.css';
import "./components/css/index.css"
import Header from "./components/Header";
import Home from "./components/Home";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fab, faEnvelope, faLinkedin, faGithub)


const App = () => {
    const [activePage, setActivePage] = useState("home")
    const [elementPositions, setElementPositions] = useState({"home": 240,"about": 500,"contact":1300})

    // const setActivePageOnHomePage = () => {
    //     if (window.scrollY <= elementPositions.home-40) {
    //         setActivePage("home")
    //     } if (window.scrollY > elementPositions.home-40 && window.scrollY <= elementPositions.contact){
    //         setActivePage("about")
    //     }
    // }

    return (
        <>
            <Header setActivePage={setActivePage}
                    activePage={activePage}/>
            <Home   setActivePage={setActivePage}
                setElementPositions={setElementPositions}
                    elementPositions={elementPositions}/>
        </>
    )
}

export default App;
