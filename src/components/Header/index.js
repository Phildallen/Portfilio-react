
const Header = ({activePage, setActivePage}) => {
    return(
        <>
            <div className="header">
                {activePage === "home" ? null :<button className="navButton" onClick={() => setActivePage("home")}>home</button>}
                {activePage === "about" ? null :<button className="navButton" onClick={() => setActivePage("about")}>about</button>}
                {activePage === "projects" ? null :<button className="navButton" onClick={() => setActivePage("projects")}>projects</button>}
                {activePage === "contact" ? null :<button className="navButton" onClick={() => setActivePage("contact")}>contact</button>}
            </div>
        </>
    )
}

export default Header