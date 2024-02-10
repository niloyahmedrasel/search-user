import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const UserInfo = () => {
    const { id } = useParams();
    const userData = useLoaderData();

    if (!userData) {
        // You may want to add a loading state or error handling here
        return <div>Loading...</div>;
    }

    const { name, email, company, address } = userData;

    return (
        <div>
        <h1 className="mt-20 font-bold text-blue-500 text-2xl tracking-wide">
        Single informations about user
        </h1>

        <div className="card card-side bg-base-100 shadow-xl">
        <div className="card-body mt-20">
         <h2 className=" text-3xl font-bold text-blue-500 cursor-pointer">{name}</h2>
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

export default UserInfo;
