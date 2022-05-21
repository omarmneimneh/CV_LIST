import React from "react";

const SchoolField = ({ schoolName, gradYear, degree, key }) =>{
    return(
        <div className="schoolInfo">
            <h2>{schoolName}</h2>
            <p className="gradYear">{gradYear}</p>
            <p className="degree">{degree}</p>
        </div>
    )
}

export default SchoolField;