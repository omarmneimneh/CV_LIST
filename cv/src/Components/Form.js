import React,{useState} from "react";

function Form({
  setGeneralInfo,
  generalInfo,
  setEducationInfo,
  educationInfo,
}) {
  
  const [nameInput, setNameInput]=useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setPhoneNumberInput] = useState("");

  const[schoolNameInput, setSchoolName] = useState("");
  const[graduationYearInput, setGradYear] = useState("");
  const[degreeNameInput, setDegreeName] = useState("");

  const[companyNameInput, setCompanyName] = useState("");
  const[positionInput, setPosition] = useState("");
  const[tenure, setTenure] = useState("");
  const[description, setDescription] = useState([]);

  const changeHandler = (e) => {
    var input = e.target.className;
    switch(input){
      case"nameInput":
        setNameInput(e.target.value);
        break;
      case"emailInput":
        console.log(e.target.value);
        setEmailInput(e.target.value);
        break;
      case"numberInput":
        setPhoneNumberInput(e.target.value);
        break;
      case"schoolInput":
        setSchoolName(e.target.value);
        break;
      case"graduationInput":
        setGradYear(e.target.value);
        break;
      case"degreeInput":
        setDegreeName(e.target.value);
        break;
      default:
        break;
    }
  };

  // const emailChangeHandler = (e) => {
  //   console.log(e.target.className)
  //   setEmailInput(e.target);
  // };

  const numberChangeHandler = (e) => {
    setPhoneNumberInput(e.target.value);
  };

  const schoolChangeHandler = (e) => {
    setSchoolName(e.target.value);
  };

  const gradYearChangeHandler = (e) => {
    setGradYear(e.target.value);
  };
  const degreeChangeHandler = (e) =>{
    setDegreeName(e.target.value);
  }

  const generalInfoSubmitHandler = (e) => {
    e.preventDefault();
    setGeneralInfo([
      ...generalInfo,
      {id:Math.random()*1000, name:nameInput, number:numberInput, email:emailInput}
    ]);
    // setNameInput("");
    // setEmailInput("");
    // setPhoneNumberInput("");
  };

  const educationInfoSubmitHandler = (e) => {
    e.preventDefault()
    setEducationInfo([
      ...educationInfo,
      {
        key: Math.random() * 1000,
        name: schoolNameInput,
        degree: degreeNameInput,
        gradYear: graduationYearInput,
      },
    ]);
    setDegreeName("");
    setGradYear("");
    setSchoolName("");
  };
  return (
    <div>
      <form className="form">
        <div className="general">
          <label htmlFor="" id="label">
            Name:
          </label>
          <input onChange={changeHandler}  className="nameInput" id="input" type="text" required />
          <label htmlFor="" id="label">
            Email:
          </label>
          <input
            className="emailInput"
            onChange={changeHandler}
            id="input"
            type="text"
            required
          />
          <label htmlFor="" id="label">
            Phone Number:
          </label>
          <input onChange={changeHandler} type="number" required  className="numberInput"/>
          <button className="submit" onClick={generalInfoSubmitHandler}>Submit</button>
        </div>

        <div className="EducationForm">
          <label htmlFor="" id="label">
            University:
          </label>
          <input id="input" type="text" onChange={changeHandler}  className="schoolInput"/>
          <label htmlFor="" id="input">
            Duration:
          </label>
          <input id="input" type="text" onChange={changeHandler}  className="graduationInput"/>
          <label htmlFor="" id="label">
            Degree:
          </label>
          <input type="text" id="input" onChange={changeHandler} className="degreeInput"/>
          <button className="submit" onClick={educationInfoSubmitHandler}>Submit</button>
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
