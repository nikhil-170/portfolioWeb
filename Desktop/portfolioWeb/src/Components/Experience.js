import React from 'react'

const Experience = () => {
    return (
    <div id= "experience"className="experience">
        <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
        </div>
        <div className="container experience-wrapper">
            <div className ="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>Jan 2021- May 2021</h3>
                    <h5>Teaching Assistant( Charlotte, North Carolina )</h5>
                    <p className="experiencepara">Instructor for introductory course of Database Design and Implementation for a class of 50 students.</p>
                    <p>Responsible for conducting lectures, grading and providing feedback to students on their homework.</p>
                </div>
            </div>
            {/*---*/}
            <div className ="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>Mar 2018- Dec 2019</h3>
                    <h5>Senior Software Engineer( Pune, India )</h5>
                    <p className="experiencepara">Implemented user interface guidelines and standards throughout the development and maintenance of the website using HTML5, ReactJs, CSS, AJAX, JavaScript, and jQuery.</p>
                    <p>Implemented Web-Services to integrate between different applications (internal and third party components using RESTful services using Jersey.</p>
                    <p>Designed and developed Data Access Objects (DAO) to access the database. Used DAO Factory and Value object design patterns to organize and integrate the Java objects.</p>
                    <p>Managed and ensured accuracy on the Confluence and Jira platforms by assuring all on-going changes were appropriately reflected. </p>
                </div>
            </div>
            {/*--*/}
            <div className ="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>Dec 2016 - Jan 2016</h3>
                    <h5>Software Engineer Intern</h5>
                    <p className="experiencepara">Conceptualized, developed, and tested e-commerce web application, core functionality, and third-party APIs.</p>
                    <p>Designed REST API endpoints using Spring Boot, JPA(ORM), MYSQL.</p>
                    <p>Partnered closely with cross functional teams and front end implementation of the application in identifying bugs, user experience issues, and functionality problems.</p>
                </div>
            </div>
            {/*--*/}
        </div>
    </div>
    )
}

export default Experience
