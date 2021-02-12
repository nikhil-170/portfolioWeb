import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faDesktop, faFileCode, faServer } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id= "services"className="services">
            <h1 className = "py-5">technical skills</h1>
            <div className="container">
                <div className="row">
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
                            <h4>Languages</h4>
                            <p>Java<br/> Python<br/> JavaScript<br/> Kotlin<br/> SQL</p>
                        </div>
                    </div>
                    {/* -- */}
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
                            <h4>DataBases/<br/>Frameworks</h4>
                            <p>MySQL <br/>MongoDB<br/>MS SQL SERVER<br/>Spring Boot <br/>Express.js </p>
                        </div>
                    </div>
                    {/* -- */}
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
                            <h4>Web/Mobile</h4>
                            <p>NodeJS<br/>ReactJS<br/> HTML5<br/> CSS3<br/>AWS<br/> EC2</p>
                        </div>
                    </div>
                    {/* -- */}
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
                            <h4>Other</h4>
                            <p>Android SDK<br/> REST API<br/> Git<br/> Informatica<br/> Cognos<br/> Hive<br/> Linux/Unix</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Services
