import React, { useState } from "react";
import Resume from "./Components/Resume";
import Form from "./Components/Form";
import SchoolField from "./Components/schoolField";
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
      />
      <Resume
        // nameInput={nameInput}
        // emailInput={emailInput}
        // numberInput={numberInput}
        educationInfo={educationInfo}
        generalInfo={generalInfo}
      />
    </div>
  );
};

export default App;
