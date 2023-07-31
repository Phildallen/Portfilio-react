import Header from "../Header";
import Portfolio from "../Portfolio";
import Sidebar from "../Sidebar";
import Corner from "../TopLeftCorner";
const Layout = ({ children }) => {
    return (
        <>

            <div className="layoutWrapper">
                {/*<Corner />*/}
                <Header />
                {/*<Sidebar />*/}
                <Portfolio />
            </div>
        </>
    );
};
export default Layout;