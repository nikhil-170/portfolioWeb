import React from "react"
import Typed from "react-typed";
import {Link} from "react-scroll";
const Header = () => {
    return (
    <div id="Home"className= "header-wraper"> 
    <div className= "main-info">
        <h1>Hi, I am<br/>Nikhil Surya Peteti</h1>
        <Typed
        className = "typed-text"
        strings = {["Software Engineer","Web Developer", "Android Engineer" ]}
        typeSpeed={40}
        backSpeed = {60}
        loop
        />
        <Link smooth={true} to="Contact" href= "#" className = "btn-main-offer">contact me</Link>
    </div>
    </div>
    )
}

export default Header
