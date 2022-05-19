import React from "react";

function Form({
  setGeneralInfo,
  setNameInput,
  setEmailInput,
  setPhoneNumberInput,
  nameInput,
  emailInput,
  numberInput,
  setSchoolName,
  setGradYear,
  setDegreeName,
  setEducationInfo,
  educationInfo,
  graduationYearInput,
  degreeNameInput,
  schoolNameInput,
}) {
  const nameChangeHandler = (e) => {
    setNameInput(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const numberChangeHandler = (e) => {
    setPhoneNumberInput(e.target.value);
  };

  const schoolChangeHandler = (e) => {
    setSchoolName(e.target.value);
  };

  const gradYearChangeHandler = (e) => {
    setGradYear(e.target.value);
  };

  const generalInfoSubmitHandler = (e) => {
    e.preventDefault();
    setNameInput("");
    setEmailInput("");
    setPhoneNumberInput("");
  };

  const educationInfoSubmitHandler = (e) => {
    setEducationInfo([
      ...educationInfo,
      {
        id: Math.random() * 1000,
        name: schoolNameInput,
        degree: degreeNameInput,
        gradYear: graduationYearInput,
      },
    ]);
  };
  return (
    <div>
      <form className="form">
        <div className="general">
          <label htmlFor="" id="label">
            Name:
          </label>
          <input onChange={nameChangeHandler} id="input" type="text" required />
          <label htmlFor="" id="label">
            Email:
          </label>
          <input
            onChange={emailChangeHandler}
            id="input"
            type="text"
            required
          />
          <label htmlFor="" id="label">
            Phone Number:
          </label>
          <input onChange={numberChangeHandler} type="number" required />
          <button onClick={generalInfoSubmitHandler}>Submit</button>
        </div>

        <div className="EducationForm">
          <label htmlFor="" id="label">
            University:
          </label>
          <input id="input" type="text" onChange={schoolChangeHandler} />
          <label htmlFor="" id="input">
            Graduation Year:
          </label>
          <input id="input" type="number" />
          <label htmlFor="" id="label">
            Degree:
          </label>
        </div>

        <div className="WorkExperience">
          <label htmlFor="" id="label">
            Company Name:
          </label>
          <input type="text" id="input" />
          <label htmlFor="" id="label">
            Dates of Employment:
          </label>
          <input type="text" id="input" />
          <label htmlFor="" id="label">
            Description
          </label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default Form;