import React from 'react';

const DoctorNew = ({ doctor }) => {

  const { name, hospital } = doctor
  const defaultName = name ? name :  ""
  const defaultHospital = hospital ? hospital :  ""
  return(
    <>
      <h1>Add a Doctor</h1>
      <form action="/doctors" method="post">
        <input 
          placeholder="Doctors Name"
          type="text"
          defaultValue={defaultName}
          name="doctor[name]"
        />
        <input 
          placeholder="Practicing Hospital"
          type="text"
          defaultValue={defaultHospital}
          name="doctor[hospital]"
        />
        <br />
        <br />
        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </form>
      <br />
      <br />
      <a href="/">
        <button class="btn btn-outline-dark">Cancel</button>
      </a>
    </>
  )
}

export default DoctorNew;