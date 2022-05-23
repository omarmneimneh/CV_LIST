import React from "react";

const WorkExperienceField = ({description, name, position, tenure, key}) =>{
    return(
        <div id={key} className="schoolInfo">
            <h2>{name}</h2>
            <p className="position">{position}</p>
            <p className="degree">{tenure}</p>
            <ul>
                {description.forEach(bullet =>{
                    return(
                        <li>{bullet}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default WorkExperienceField;