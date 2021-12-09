import React from 'react';

const DoctorEdit = ({ doctor }) => {
  const {  id ,name, hospital} = doctor
  const defaultName =  name ? name : ""
  const defaultHospital =  hospital ?  hospital : ""


 
  return (
    <>
    
      <h1>Edit Doctor: {name} </h1>
      <form action={`/doctors/${id}`} method="post">
        {}
        <input type='hidden' name='_method' value="patch" />

        
          <label>Name:  </label>
          <input
            type="text"
            placeholder="Doctor name"
            required
            defaultValue={defaultName}
            name="doctor[name]"
          />
       
        
       
          <label>Practicing At:  </label>
          <input
            type="text"
            placeholder="User name"
            required
            defaultValue={defaultHospital}
            name="doctor[hospital]"
          />
       <br />
       <br />
        <button type="submit" class="btn btn-outline-primary">Update Doctor</button>
      </form>
     
      <br />
      <br />
      <a href="/doctors" class="btn btn-outline-dark">Back to Doctors</a>
    </>
  )
}

export default DoctorEdit;