import React from 'react';

const UserEdit = ({ user }) => {
  const {  id ,name, age} = user 
  const defaultName =  name ? name : ""
  const defaultAge =  age ?  age : ""


 
  return (
    <>
    
      <h1>Edit User {name} </h1>
      <form action={`/users/${id}`} method="post">
        {}
        <input type='hidden' name='_method' value="patch" />

        
          <label>Name:  </label>
          <input
            type="text"
            placeholder="User name"
            required
            defaultValue={defaultName}
            name="user[name]"
          />
       
        
       
          <label>Age:  </label>
          <input
            // className="form-control col-md-6"
            type="text"
            placeholder="User name"
            required
            defaultValue={defaultAge}
            name="user[age]"
          />
      <br />
      <br />
        <button type="submit" class="btn btn-outline-primary">Update User</button>
      </form>
     
      <br />
      <a href="/users" class="btn btn-outline-dark">Back to Users</a>
    </>
  )
}

export default UserEdit;