import React from "react";
import SchoolField from "./schoolField";
const Resume = ({generalInfo, educationInfo}) => {    
    return(
        <div className="resume">
            <div className="general">
                <h1 id="name">Omar Mneimneh</h1>
                <div className="emailnphone">
                    <p>{}</p>
                    <p></p>
                </div>
            </div>

            <div className="schoolInfo">
                <ul>
                    {educationInfo.map(school => {
                        return <SchoolField 
                            schoolName = {school.name}
                            key = {school.id}
                            gradYear={school.gradYear}
                            degree={school.degree}
                        />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Resume;