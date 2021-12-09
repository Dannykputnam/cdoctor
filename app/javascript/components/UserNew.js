import React from 'react';

const UserNew = ({ user }) => {

  const { name, age } = user
  const defaultName = name ? name :  ""
  const defaultAge = age ? age :  ""
  return(
    <>
      <h1>Add User</h1>
      <form action="/users" method="post">
        <input 
          placeholder="First Name"
          type="text"
          defaultValue={defaultName}
          name="user[name]"
        />
        <input 
          placeholder="Age"
          type="text"
          defaultValue={defaultAge}
          name="user[age]"
        />
        <br />
        <br />
        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </form>
      <br />
      <a href="/">
        <button class="btn btn-outline-dark">Cancel</button>
      </a>
    </>
  )
}

export default UserNew;