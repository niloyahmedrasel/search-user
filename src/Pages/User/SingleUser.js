import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({user}) => {
    const {id,name,email,company,address} = user;
    
    return (
        <div>
        <div className="card card-side bg-base-100 shadow-xl">
       
        <div className="card-body">
         <Link to={`/userinfo/${id}`}> <h2 className=" text-3xl font-bold text-blue-500 cursor-pointer">{name}</h2></Link>
          <p className='font-semibold text-xl '><span className='font-bold '>Email: {email}</span></p>
          <p className='font-semibold text-xl '><span className='font-bold '>Company Name: {company.name}</span></p>
          <p className='font-semibold text-xl '><span className='font-bold mt-2'> Address <br></br>Street: {address.street}</span></p>
          <p className='font-semibold text-xl '><span className='font-bold '>Suite: {address.suite}</span></p>
          <p className='font-semibold text-xl '><span className='font-bold '>City: {address.city}</span></p>
          
        </div>
      </div>
        </div>
    );
};

export default SingleUser;