import React from "react";
import SchoolField from "./schoolField";
const Resume = ({nameInput, emailInput, numberInput, educationInfo}) => {    
    return(
        <div className="resume">
            <div className="general">
                <h1 id="name">{nameInput}</h1>
                <div className="emailnphone">
                    <p>{emailInput}</p>
                    <p>{numberInput}</p>
                </div>
            </div>

            <div className="schoolInfo">
                <ul>
                    {educationInfo.map(school => {
                        <SchoolField 
                            schoolName = {school.name}
                            id = {school.id}
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