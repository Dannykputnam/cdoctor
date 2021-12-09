import React from 'react';

//# email isnt desplaying 

const User = ({ user }) => {

  const { name, age, id} = user

  return (
    <>
      <h2>User Info</h2>
      <h3>Name: {name} Age: {age}</h3>
      <br/>
        <p>
          {/* Created: {created_at}, id: {id} */}
        </p>
        <a href={`/users/${id}/trips`} class="btn btn-outline-secondary">Show Appointments</a>
        <br />
        <br />
        <a href="/" class="btn btn-outline-dark" >Back</a>
    </>
  )
}



export default User;