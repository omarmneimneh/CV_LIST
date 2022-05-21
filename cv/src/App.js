import React, { useState } from "react";
import Resume from "./Components/Resume";
import Form from "./Components/Form";

import "./style.css";
const App = () => {
  //general information props and states (left and right respectively)
  const [generalInfo, setGeneralInfo] = useState([]);
  //education props and states
  const [educationInfo, setEducationInfo] = useState([]);

  //Work Experience props and states
  const [workExperienceInfo, setWorkExperienceInfo] = useState([]);

  return (
    <div>
      <div className="navBar">
        <p>Resume Builder</p>
      </div>
      <Form
        //general info props and states
        setGeneralInfo={setGeneralInfo}
        generalInfo={generalInfo}
        //education props and states
        setEducationInfo={setEducationInfo}
        educationInfo={educationInfo}
        //work experience props and states
        workExperienceInfo={workExperienceInfo}
        setWorkExperienceInfo={setWorkExperienceInfo}
      />
      <Resume
        educationInfo={educationInfo}
        generalInfo={generalInfo}
        workExperienceInfo={workExperienceInfo}
      />
    </div>
  );
};

export default App;
