import React from  "react";
// IMPORTING REACR FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className ="container">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon = {faBars} style = {{color: "#fff"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="Home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to= "about"className="nav-link" href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services"className="nav-link" href="#">skills</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience"className="nav-link" href="#">Work Experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio"className="nav-link" href="#">Projects</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Contact"className="nav-link" href="#">Contact me</Link>
            </li>
          </ul>
        </div>
          </div>
      </nav>
    )
}

export default navbar
