import React from "react";

const Resume = ({nameInput, emailInput, numberInput, educationInfo}) => {
    
    const schoolInfoHandler = (school) => {
        return(
            <div>
                <h2>{school.name}</h2>
                <p id="gradYear">{school.gradYear}</p>
                <p id="degree">{school.degree}</p>
            </div>
        )
    }
    
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
                    {/* {educationInfo.map((school) =>{
                        <schoolField 
                            schoolName = {school.name}
                            key = {school.key}
                            gradYear={school.gradYear}
                            degree={school.degree}
                        />
                    })} */}
                </ul>
            </div>
        </div>
    )
}

export default Resume;