import React from "react";
import author from "../nikhilPhoto.jpg";
const aboutMe = () => {
    return (
        <div className = "container py-5">
            <div className = "row">
                <div className ="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt ="author..."/>
                    </div>
                </div>
                <div className ="col-lg-6 col-xm-12">
                    <h1 className="aboutMeHeading">about me</h1>
                    <p className="aboutPara">
                    Hi there! I am
 Anand Kumar Jha

A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
Along with that, I also help people as a COACH on their journey of becoming a professional programmer.
I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default aboutMe
