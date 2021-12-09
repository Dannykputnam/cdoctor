import React from 'react';

const Doctors = ({ doctors }) => {
  return (
    <>
      <h1>All Doctors</h1>
      <a href={`/doctors/new`}>
        <button class="btn btn-outline-dark">Add a Doctor</button>
        </a>
      {/* <h2>{ users.length <= 0 ? "No Users" : ''}</h2> */}
      { doctors.map( (doctor) => (

       <div class="card" styles="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">{doctor.name}</h5>
         <h6 class="card-subtitle mb-2 text-muted">Practicing at: {doctor.hospital}</h6>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href={`/doctors/${doctor.id}`} class="card-link">Show {doctor.name}</a>
         <a href={`/doctors/${doctor.id}/edit`} class="card-link">Edit</a>
         <a href={`/doctors/${doctor.id}`} data-method= 'delete' class="card-link">Delete</a>
       </div>
       </div> 
      ))}
    </>
  )
}



{/* <div>
<h2>{doctor.name}</h2>

<br/>
    <a className="btn btn-primary" href={`/doctors/${doctor.id}`}>Show {doctor.name}</a>
    <br/>
    <a className="btn btn-warning" href={`/doctors/${doctor.id}/edit`}>Edit</a>
    <br/>
    <a className="btn btn-danger" href={`/doctors/${doctor.id}`} data-method='delete'>
      Delete
    </a>
</div> */}

export default Doctors;