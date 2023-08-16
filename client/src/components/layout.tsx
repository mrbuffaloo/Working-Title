import "./components.css"

import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";

type childrenProps = React.PropsWithChildren<{}>;


const Layout = ({children}: childrenProps) => {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <div className="layout-body">
                
                <div>{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout