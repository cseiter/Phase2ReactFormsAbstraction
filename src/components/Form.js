import React, {useState} from "react";

function Form() {
  const [formData,setFormData] = useState({
    fistname:"John",
    lastName:"Henry",
  });
  /* const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry"); */

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
/*     setFirstName(event.target.value); */
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
/*     setLastName(event.target.value); */
  }

  return (
    <form>
      <input type="text"
      onChange={handleFirstNameChange}
      value={FormData.firstName}
      />
      <input type="text"
      onChange={handleLastNameChange}
      value={FormData.lastName}
      />
{/*       <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button> */}
    </form>
  );
}

export default Form;
