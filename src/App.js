import './App.css';
import "./components/css/index.css"
import Header from "./components/Header";
import Home from "./components/Home";
import {useState} from "react";


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
