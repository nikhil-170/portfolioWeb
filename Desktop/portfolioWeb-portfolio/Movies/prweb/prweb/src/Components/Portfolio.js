import React from 'react'
import spotify from "../images/spotify.jpg";
import dreamteam from "../images/dreamteam.jpg";
import movierecommendation from "../images/movieRecommendation.jpg";
import gosport from "../images/gosport.jpg";
//Font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons';
//React popup
import {PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {

    //Soptify Clone
    const openPopupBoxSpotify = () =>{

        const content =(
            <>
            <img className="portfolio-image-popupbox" src={spotify} alt="Spotify Clone Project"/>
            <p className="popuppara">Created a responsive and robust Android application using Android Studio 4.0, CloudFireStore as Database, and making GET REST API calls.</p>
            <p className="popuppara">Implemented interactive user interface with RecyclerView of CardViews, Toast messages.</p>
            <p className="popuppara">Integrated third party libraries including Picasso, ActionBarSherlock, Room and Okhttp3.</p>
            <b>GitHub: </b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nikhil-170/minimalSpoftify")} > https://github.com/nikhil-170/minimalSpoftify</a>
            </>
        )
       
        PopupboxManager.open({content})
    }

    const popupboxConfigSpotify = {
        titleBar: {
            enable: true,
            text: "Spotify Clone Project"
        },
        fadeIn: true,
        fadeInSpeed: 300
    }

    // Dream Team
    const openPopupBoxDreamTeam = () =>{

        const content =(
            <>
            <img className="portfolio-image-popupbox" src={dreamteam} alt="Dream Team Project"/>
            <p className="popuppara">Designed an android application using Android Studio(4.0) for users to easily interact and get best possible team based on the information provided  by the user.</p>
            <p className="popuppara">The Interface displays a squad of 11 perfect players on the interface within the users specified budget and selected formation for clubs. </p>
            {/* <b>GitHub: </b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nikhil-170/minimalSpoftify")} > https://github.com/nikhil-170/minimalSpoftify</a> */}
            </>
        )
       
        PopupboxManager.open({content})
    }

    const popupboxConfigDreamTeam = {
        titleBar: {
            enable: true,
            text: "Dream Team Project"
        },
        fadeIn: true,
        fadeInSpeed: 300
    }

    // Movie Recommendationa
    const openPopupBoxMovieRecommendations = () =>{

        const content =(
            <>
            <img className="portfolio-image-popupbox" src={movierecommendation} alt="Dream Team Project"/>
            <p className="popuppara">Developed a Web Application that recommends Movies and Tv Shows for each user based on his previous search, ratings.</p>
            <p className="popuppara">The Interface displays a squad of 11 perfect players on the interface within the users specified budget and selected formation for clubs. </p>
            {/* <b>GitHub: </b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nikhil-170/minimalSpoftify")} > https://github.com/nikhil-170/minimalSpoftify</a> */}
            </>
        )
       
        PopupboxManager.open({content})
    }

     //GoSport
     const openPopupBoxGoSport = () =>{

        const content =(
            <>
            <img className="portfolio-image-popupbox" src={gosport} alt="GoSport"/>
            <p className="popuppara">Designed responsive full-stack application using NodeJS as Backend, MongoDB, and ReactJS as frontend. Handled high-level design of application and user interface to ensure intuitive understanding.</p>
            <p className="popuppara">Implemented Passport.js for authentication and Session management, developed input-validations in workflow of application.</p>
            {/* <b>GitHub: </b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nikhil-170/minimalSpoftify")} > https://github.com/nikhil-170/minimalSpoftify</a> */}
            </>
        )
       
        PopupboxManager.open({content})
    }

    const popupboxConfigGoSport = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 300
    }


    const popupboxConfigMovieRecommendations = {
        titleBar: {
            enable: true,
            text: "Movie Recommendations Project"
        },
        fadeIn: true,
        fadeInSpeed: 300
    }
    return (
        <div id="portfolio"className ="portfolio-wrapper">
            <div className="container">
                <h1 className= "text-uppercase text-center py-5">projects</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupBoxSpotify}>
                    <img className = "portfolio-image" src={spotify} alt ="spotify clone project"/>
                    <p className="paraforprojects">Spotify clone</p>
                    <div className="overflow"></div>
                    <FontAwesomeIcon  className= "portfolio-icon"icon={faSearchPlus}/>
                    </div>
                {/*_*/}
                <div className="portfolio-image-box" onClick={openPopupBoxDreamTeam}>
                    <img className = "portfolio-image" src={dreamteam} alt ="Dream Team Fifa"/>
                    <p className="paraforprojects">Dream Team Fifa</p>
                    <div className="overflow"></div>
                    <FontAwesomeIcon  className= "portfolio-icon"icon={faSearchPlus}/>
                </div>
                {/*_*/}
                <div className="portfolio-image-box" onClick={openPopupBoxGoSport}>
                    <img className = "portfolio-image" src={gosport} alt ="GoSport"/>
                    <p className="paraforprojects">Go Sport</p>
                    <div className="overflow"></div>
                    <FontAwesomeIcon  className= "portfolio-icon"icon={faSearchPlus}/>
                </div>
                {/*_*/}
                <div className="portfolio-image-box" onClick={openPopupBoxMovieRecommendations}>
                    <img className = "portfolio-image" src={movierecommendation} alt ="Movie Recommendations"/>
                    <p className="paraforprojects">Movie Recommendations</p>
                    <div className="overflow"></div>
                    <FontAwesomeIcon  className= "portfolio-icon"icon={faSearchPlus}/>
                </div>
            </div>
        </div>
            <PopupboxContainer {...popupboxConfigSpotify}/>
            <PopupboxContainer {...popupboxConfigDreamTeam}/>
            <PopupboxContainer{...popupboxConfigMovieRecommendations}/>
            <PopupboxContainer{...popupboxConfigGoSport}/>
        </div>
    )
}

export default Portfolio
