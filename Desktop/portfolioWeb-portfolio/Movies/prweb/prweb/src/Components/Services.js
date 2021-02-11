import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faDesktop, faFileCode, faServer } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
            <h1 className = "py-5">industry knowledge</h1>
            <div className="container">
                <div className="row">
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
    <div className="circle"><FontAwesomeIcon className = "icon" icon ={faFileCode} size= "2x"/></div>
                            <h3>Web Design</h3>
                            <p>I approch each project individually</p>
                        </div>
                    </div>
                    {/* -- */}
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
    <div className="circle"><FontAwesomeIcon className = "icon"icon ={faDatabase} size= "2x"/></div>
                            <h3>DataBase Administator</h3>
                            <p>I approch each project individually</p>
                        </div>
                    </div>
                    {/* -- */}
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
    <div className="circle"><FontAwesomeIcon className = "icon"icon ={faAndroid} size= "2x"/></div>
                            <h3>Android Development</h3>
                            <p>I approch each project individually</p>
                        </div>
                    </div>
                    {/* -- */}
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
    <div className="circle"><FontAwesomeIcon className = "icon"icon ={faServer} size= "2x"/></div>
                            <h3>ETL Developer</h3>
                            <p>I approch each project individually</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Services
