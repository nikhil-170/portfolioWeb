import React from "react";
import author from "../nikhilPhoto.jpg";
const aboutMe = () => {
    return (
        <div id="about"className = "container py-5">
            <div className = "row">
                <div className ="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt ="author..."/>
                    </div>
                </div>
                <div className ="col-lg-6 col-xm-12">
                    <h1 className="aboutMeHeading">about me</h1>
                    <p className="aboutPara">
                    Hi there! I am Nikhil Surya Peteti ,A passionate programmer and Sports enthusiast, born and brought up in India. I am currently a Grad Student at University Of North Carolina, Charlotte with React.js, Express.js, Node.js, Java
Android as my tech stack. In 2017, I successfully completed my Engineering with specialization in 'Electronics and Communication' from Vellore Institute of Technology, India.
Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default aboutMe
