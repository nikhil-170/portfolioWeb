import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    sharebutton

} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className = "row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>9531 M, Univeristy Terrace Drive, Charlotte, North Carolina, 28262</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: 704-665-9714"> +1 (704)-665-9714</a>
                        </div>
                        <div className="d-flex">
                            <p>peteti.nikhil@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className ="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                                <br/>
                            </div>
                            <div className ="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
