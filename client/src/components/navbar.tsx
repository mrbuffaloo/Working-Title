import "./components.css"
import { useState } from "react"

const Navbar = () => {

const [isNavLarge, setIsNavLarge] = useState(false)

    return (
        <nav className="navbar">
          
          <li><a className="openBtn"> <button className="openBtn" onClick={() => {setIsNavLarge(!isNavLarge)}}>Open</button></a></li>
            <div className={ isNavLarge ? "navigation-menu expanded" : "navigation-menu"}>
               
                <ul className="list-of-links">
                    <li><a className="closeBtn"> <button className="closeBtn" onClick={() => {setIsNavLarge(!isNavLarge)}}>Close</button></a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/app">App</a></li>
                </ul>
            </div>         
        </nav>
    )
}

export default Navbar