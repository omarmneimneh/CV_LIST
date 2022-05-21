import React from "react";

const WorkExperienceField = (description, name, position, tenure) =>{
    const lister = (item) =>{
        return(
            <li>{item}</li>
        )
    }
    return(
        <div className="work">
            <div className="companyName">
                <h2>{name}</h2>
            </div>
            <div className="position">
                <p>{position}</p>
            </div>
            <div className="dates">
                {tenure}
            </div>
            <div className="desc">
                <ol>
                    {/* {description.forEach(item => {return lister(item)})} */}
                </ol>
            </div>
        </div>
    )
}

export default WorkExperienceField;