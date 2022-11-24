import React from 'react';
import { Link } from 'react-router-dom';


export const NotFound = () => {
  return (
    <div style={{width:"100vw",height:'100vh',display:'grid',placeContent:'center'}} >
<div className="card">
  <div className="card-body">
    <h3 className="card-title">Not Found</h3>
    <Link to='/' className='d-inline-block card-link mt-2'>go back to login</Link>
  </div>
</div>
    </div>
  )
}
