import collectionApp from "../../images/collectionApp.png"
import wordleClone from "../../images/wordleClone.png"
import jobSearch from "../../images/jobSearch.png"
import musicApp from "../../images/musicApp.png"
import stockManagementAPI from "../../images/stockManagementAPI.png"
import billSplitter from "../../images/billSplitter.png"
import {useEffect, useRef} from "react";

const Projects = ({elementPositions, setElementPositions}) => {

    const projectsRef = useRef()

    const getPosition = () => {
        const updateY = {...elementPositions}
        updateY.projects = projectsRef.current.offsetTop
        setElementPositions(updateY)
    }

    useEffect(() => {
        getPosition()
        window.addEventListener("resize", getPosition)
        return () => {
            window.removeEventListener("resize", getPosition)
        }
    }, [])

    return (
        <div className="homePage projectPageGrid">
            <h1 className="projectsHeading" ref={projectsRef}>Projects</h1>
            <div className="projects">
                <div className="projectCard">
                    <h2>Collection App</h2>
                    <div>
                        <img src={collectionApp} alt="Screenshot of collection app"/>
                        <p>This was our second, and final, solo project. This application displays a part of my
                            retro video game
                            collection.</p>
                        <p>It is an HTML and CSS site, with the data stored in an SQL database</p>
                        <div>
                            <a href="https://github.com/Phildallen/Collection-app" target="_blank"
                               className="projectLink">View on
                                GitHub
                            </a>
                            <a href="https://2023-philipa.dev.io-academy.uk/Collection-app/" target="_blank"
                               className="projectLink">Live
                                version
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <h2>Wordle Clone</h2>
                    <img src={wordleClone} alt="Screenshot of wordle clone"/>
                    <p>For this, our first group project, we were tasked with creating a clone of the game
                        Wordle.</p>
                    <p>Written in JavaScript, it picks a random word from a json file and allows 6 guesses.
                        Like the original, it lets you know which letters are correct, but in the wrong
                        location, and which are
                        correct and in the correct location.
                        It also has a timer to prevent repeated games, utilizing local storage to prevent
                        refreshing the page
                        negating the timer.</p>
                    <div>
                        <a href="https://github.com/iO-Academy/2023-mar-wordle" target="_blank"
                           className="projectLink">View on
                            GitHub
                        </a>
                        <a href="https://2023-philipa.dev.io-academy.uk/2023-mar-wordle/"
                           target="_blank" className="projectLink">Live
                            version
                        </a>
                    </div>
                </div>
                <div className="projectCard">
                    <h2>Job Search App Front End</h2>
                    <img src={jobSearch} alt="Screenshot of job search project"/>
                    <p>This group project was to create a front end, in React, for a supplied API</p>
                    <p>My contributions to this project included formatting using Bootstrap and work on the
                        modal.</p>
                    <div>
                        <a href="https://github.com/iO-Academy/23-mar-icantbelieveitsnotmonster"
                           target="_blank"
                           className="projectLink">View on GitHub
                        </a>
                        <a href="https://23-mar-icantbelieveitsnotmonster.netlify.app/" target="_blank"
                           className="projectLink">Live
                            version
                        </a>
                    </div>
                </div>
                <div className="projectCard">
                    <h2>Music player API</h2>
                    <img src={musicApp} alt="Screenshot of music player fe"/>
                    <p>For this project, we were given a front end with API documentation.
                        Our task was to build the API in PHP, using OOP, while adhering to SOLID.</p>
                    <p>My main contribution to this project was working out how to get data from the front
                        end.</p>
                    <div>
                        <a href="https://github.com/iO-Academy/23-mar-icantbelieveitsnotspotify"
                           target="_blank"
                           className="projectLink">View on GitHub
                        </a>
                        <a href="https://23-mar-icantbelieveitsnotspotify.netlify.app/" target="_blank"
                           className="projectLink">Live
                            version
                        </a>
                    </div>
                </div>
                <div className="projectCard">
                    <h2>Stock Management API</h2>
                    <img src={stockManagementAPI} alt="Screenshot of stock management API in Postman"/>
                    <p>For our final project, we were tasked with creating a stock management API, with
                        documentation.
                        We built this in Node with and SQL database</p>
                    <div>
                        <a href="https://github.com/iO-Academy/23-mar-icantbelievewehavethisinstock"
                           target="_blank"
                           className="projectLink">View on GitHub
                        </a>
                    </div>
                </div>
                <div className="projectCard">
                    <h2>Bill Splitting App</h2>
                    <img src={billSplitter} alt="Screenshot of Bill Splitter"/>
                    <p>This was a solo project completed after completing the course</p>
                    <p>I built it in React and optimised it for mobile. It splits a restaurant bill and
                        adjusts the tip.</p>
                    <div>
                        <a href="https://github.com/Phildallen/bill-spliting-calculator" target="_blank"
                           className="projectLink">View on GitHub
                        </a>
                        <a href="https://bill-splitter.2023-philipa.dev.io-academy.uk/" target="_blank"
                           className="projectLink">Live version
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
