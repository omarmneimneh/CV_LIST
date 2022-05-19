import React, { useState } from "react";
import Resume from "./Components/Resume";
import Form from "./Components/Form";
import "./style.css";
const App = () => {
  //general information props and states (left and right respectively)
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setPhoneNumberInput] = useState(0);

  //education props and states
  const [schoolNameInput, setSchoolName] = useState("");
  const [graduationYearInput, setGraduationYear] = useState(0);
  const [degreeNameInput, setDegreeName] = useState("");
  const [educationInfo, setEducationInfo] = useState([]);

  //Work Experience props and states
  const [companyNameInput, setCompanyName] = useState("");
  const [tenureInput, setTenureInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [workExperienceInfo, setWorkExperienceInfo] = useState([]);

  return (
    <div>
      <div className="navBar">
        <p>Resume Builder</p>
      </div>
      <Form
        //general info props and states
        nameInput={nameInput}
        emailInput={emailInput}
        numberInput={numberInput}
        setNameInput={setNameInput}
        setEmailInput={setEmailInput}
        setPhoneNumberInput={setPhoneNumberInput}
        //education props and states
        schoolNameInput={schoolNameInput}
        graduationYearInput={graduationYearInput}
        degreeNameInput={degreeNameInput}
        educationInfo={educationInfo}
        setSchoolName={setSchoolName}
        setGradYear={setGraduationYear}
        setDegreeName={setDegreeName}
        setEducationInfo={setEducationInfo}
      />
      <Resume
        nameInput={nameInput}
        emailInput={emailInput}
        numberInput={numberInput}
        educationInfo={educationInfo}
      />
    </div>
  );
};

export default App;
