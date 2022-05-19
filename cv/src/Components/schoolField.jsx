import React from "react";

const SchoolField = ({ schoolName, id, gradYear, degree }) =>{
    return(
        <div className="schoolInfo">
            <h2>{schoolName}</h2>
            <p id="gradYear">{gradYear}</p>
            <p id="degree">{degree}</p>
        </div>
    )
}

export default SchoolField;