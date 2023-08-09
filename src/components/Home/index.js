import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useEffect, useRef} from "react"
import PhilAllenCV from "../../pdf/PhilAllenCV.pdf"

const Home = ({elementPositions, setElementPositions}) => {

    const homeRef = useRef(null)
    const aboutAndIORef = useRef(null)
    const contactRef = useRef(null)
    const getPosition = () => {
        const updateY = {...elementPositions}
        updateY.home = homeRef.current.offsetTop
        updateY.about = aboutAndIORef.current.offsetTop
        updateY.contact = contactRef.current.offsetTop
        setElementPositions(updateY)
    }


    useEffect(() => {
        getPosition()
        window.addEventListener("resize", getPosition)


        return () => {
            window.removeEventListener("resize", getPosition)
        }
    }, [])


    return (<>
            <div className="homePage homePageGrid">
                <div className="homePageFlex">
                    <div className="bigLogo" ref={homeRef}>
                        <h1>Phil Allen</h1>
                        <div className="bigInnerLogo">
                            <h2>full stack developer</h2>
                        </div>
                    </div>
                    <div className="about" ref={aboutAndIORef}>
                        <p>I am Phil, an aspiring software developer making a transition from a career in accounts. This
                            is
                            driven by a lifelong passion for technology.
                            I have recently completed the Full Stack Track course at iO Academy in Bath, where I have
                            gained
                            a comprehensive understanding of the industry's best practices. My experience in finance
                            brings
                            a strong analytical mindset and attention to detail. It also brings experience collaborating
                            with teams across the business, as well as an understanding of business operations.
                            I am particularly interested in back-end developer jobs, as solving logic problems is my
                            favourite aspect of programming.
                            In my spare time I enjoy PC & retro gaming, working on my 'hobby' car as well as embracing
                            my
                            passion for House music.</p>
                        <div className="cv">
                            <h3>cv</h3>
                            <a
                                href={PhilAllenCV}
                                download="PhilAllenCV"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="cvButton">
                                    <FontAwesomeIcon icon="download"/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="bootCamp">
                        <div className="ioLink">
                            <h2>iO Academy Boot Camp</h2>
                            <a
                                href="https://io-academy.uk/courses/full-stack-track/"
                                target="_blank"
                                rel="noopener"
                            >
                                <p className="linkIcon">
                                    <FontAwesomeIcon icon="link"/>
                                </p>
                            </a>
                        </div>
                        <p>During the 16-week course, we worked in an Agile environment, implementing Scrum for the
                            group
                            projects. It taught us industry & coding best practice, as well as pair programming & code
                            reviews.
                            Examples of both my solo work, and group projects I worked on, are available on my portfolio
                            linked above.
                            We covered the following languages, frameworks and databases;</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS & SASS</li>
                            <li>PHP - including Object orientated</li>
                            <li>JavaScript - React - Node</li>
                            <li>TypeScript</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h1>Contact</h1>
                        <div className="contactButtons">
                            <a href="mailto:phil_d_allen@protonmail.com" className="contactButton">
                                <FontAwesomeIcon icon="envelope"/>
                            </a>

                            <a href="https://linkedin.com/in/philip-allen-a53ab727b" className="contactButton"
                               target="_blank" rel="noreferrer" ref={contactRef}>
                                <FontAwesomeIcon icon="fab fa-linkedin"/>
                            </a>

                            <a href="https://github.com/Phildallen" className="contactButton" target="_blank"
                               rel="noreferrer">
                                <FontAwesomeIcon icon="fab fa-github"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Home