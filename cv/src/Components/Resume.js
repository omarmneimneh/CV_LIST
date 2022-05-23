import React from "react";
import SchoolField from "./schoolField";
import WorkExperienceField from "./WorkExperiece";
const Resume = ({generalInfo, educationInfo, workExperienceInfo}) => {    
    return(
        <div className="resume">
            <div className="general">
                {generalInfo.map(person => {
                    return(
                        <div>
                            <h1>{person.name}</h1>
                            <div className="numbernEmail">
                                <p>{person.number}</p>
                                <p>{person.email}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="schoolInfo">
                <h2>Education</h2>
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
            
            <div className="workExperience">
                <h2>Work Experience</h2>
                <ul>
                    {workExperienceInfo.map(job => {
                        console.log(job)
                        return <WorkExperienceField 
                            name = {job.company}
                            key = {job.id}
                            position={job.position}
                            tenure={job.tenure}
                            description={job.description}
                        />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Resume;