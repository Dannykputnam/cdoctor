import React from 'react';

//# email isnt desplaying 

const Doctor = ({ doctor }) => {

  const { name, hospital, id} = doctor

  return (
    <>
      <h1>Doctor Info</h1>
      <br />
      <h3>Name: {name} </h3>
      <br />
      <h4>Practicing At: {hospital}</h4>
      <br/>
        <p>
          {/* Created: {created_at}, id: {id} */}
        </p>
        <a href={`/users/${id}/trips`} class="btn btn-outline-secondary">Show Appointments</a>
        <br />
        <br />
        <a href="/doctors" class="btn btn-outline-dark">Back</a>
    </>
  )
}

export default Doctor;