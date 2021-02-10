import React from 'react'

const Experience = () => {
    return (
    <div className="experience">
        <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
        </div>
        <div className="container experience-wrapper">
            <div className ="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>Mar 2018- Dec 2019</h3>
                    <p className="experiencepara">A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.</p>
                </div>
            </div>
            {/*---*/}
            <div className ="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>Jan 2021- May 2021</h3>
                    <p className="experiencepara">A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.</p>
                </div>
            </div>
            {/*--*/}
            <div className ="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>Dec 2016 - Jan 2016</h3>
                    <p className="experiencepara">A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.</p>
                </div>
            </div>
            {/*--*/}
        </div>
    </div>
    )
}

export default Experience
