import React from 'react'
import spotify from "../images/spotify.jpg";
import dreamteam from "../images/dreamteam.jpg";
import movierecommendation from "../images/movieRecommendation.jpg";
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
            <p>blah blah blah blhaskdhsahjsdfdjksjkfhdjshdskjghsfdj. blah blah blah blhaskdhsahjsdfdjksjkfhdjshdskjghsfdj. blah blah blah blhaskdhsahjsdfdjksjkfhdjshdskjghsfdj</p>
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
            <p>blah blah blah blhaskdhsahjsdfdjksjkfhdjshdskjghsfdj. blah blah blah blhaskdhsahjsdfdjksjkfhdjshdskjghsfdj. blah blah blah blhaskdhsahjsdfdjksjkfhdjshdskjghsfdj</p>
            <b>GitHub: </b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nikhil-170/minimalSpoftify")} > https://github.com/nikhil-170/minimalSpoftify</a>
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
            <p>blah blah blah blhaskdhsahjsdfdjksjkfhdjshdskjghsfdj. blah blah blah blhaskdhsahjsdfdjksjkfhdjshdskjghsfdj. blah blah blah blhaskdhsahjsdfdjksjkfhdjshdskjghsfdj</p>
            <b>GitHub: </b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nikhil-170/minimalSpoftify")} > https://github.com/nikhil-170/minimalSpoftify</a>
            </>
        )
       
        PopupboxManager.open({content})
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
        <div className ="portfolio-wrapper">
            <div className="container">
                <h1 className= "text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupBoxSpotify}>
                    <img className = "portfolio-image" src={spotify} alt ="spotify clone project"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon  className= "portfolio-icon"icon={faSearchPlus}/>
                    </div>
                {/*_*/}
                <div className="portfolio-image-box" onClick={openPopupBoxDreamTeam}>
                    <img className = "portfolio-image" src={dreamteam} alt ="Dream Team Fifa"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon  className= "portfolio-icon"icon={faSearchPlus}/>
                </div>
                {/*_*/}
                <div className="portfolio-image-box" onClick={openPopupBoxMovieRecommendations}>
                    <img className = "portfolio-image" src={movierecommendation} alt ="Movie Recommendations"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon  className= "portfolio-icon"icon={faSearchPlus}/>
                </div>
            </div>
        </div>
            <PopupboxContainer {...popupboxConfigSpotify}/>
            <PopupboxContainer {...popupboxConfigDreamTeam}/>
            <PopupboxContainer{...popupboxConfigMovieRecommendations}/>
        </div>
    )
}

export default Portfolio
