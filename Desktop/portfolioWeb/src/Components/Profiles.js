import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const profiles = () => {
    return (
        <div id="nikhilcontact">
        <h1 id ="profilesheading"className="pt-3 text-center font-details-b pb-3">PROFILES</h1>
        <Jumbotron id="nikhiljumbotron" className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
{/* Buttons*/}
        <div className="m-2">
              <a href="mailto:peteti.nikhil@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="peteti.nikhil@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
        </div>
        <div className="m-2">
              <a href="https://www.linkedin.com/in/nikhilsuryapeteti/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/nikhil-170" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/NikhilSurya3" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/nikhil.surya.5/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
                </Col>
                </Row>
                </Jumbotron>
        </div>
    )
}

export default profiles
