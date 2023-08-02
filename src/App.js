
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

    return (
        <>
            <Header setActivePage={setActivePage}
                    activePage={activePage}/>
            <Home />
        </>
    )
}

export default App;
