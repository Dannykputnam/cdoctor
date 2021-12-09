import React from 'react';

const Users = ({ users }) => {
  return (
    <>
      <h1>All Users</h1>
      <a href={`/users/new`}>
        <button class="btn btn-outline-dark">Add User</button>
        <br />
        </a>
      {/* <h2>{ users.length <= 0 ? "No Users" : ''}</h2> */}
      
      { users.map( (user) => (

<div class="card" styles="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">{user.name}</h5>
  <h6 class="card-subtitle mb-2 text-muted">Age: {user.age}</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href={`/users/${user.id}`} class="card-link">Show {user.name}</a>
  <a href={`/users/${user.id}/edit`} class="card-link">Edit</a>
  <a href={`/users/${user.id}`} data-method= 'delete' class="card-link">Delete</a>
</div>
</div> 
      ))}
    </>
  )
}




{/* <div>
          <h2>{user.name}</h2>
       
        <br/>
              <a className="btn btn-primary" href={`/users/${user.id}`}>Show {user.name}</a>
              <br/>
              <a className="btn btn-warning" href={`/users/${user.id}/edit`}>Edit</a>
              <br/>
              <a className="btn btn-danger" href={`/users/${user.id}`} data-method='delete'>
                Delete
              </a>
        </div> */}

export default Users;