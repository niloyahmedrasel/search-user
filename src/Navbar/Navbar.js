import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link to='/'><li>User</li></Link>
      <Link to='/postuser'><li>Post User</li></Link>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Assignment</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
     <Link to='/'><li className='text-xl font-semibold  hover:text-blue-500'>User</li></Link>
     <Link to='/postuser'><li className='text-xl font-semibold ml-5  hover:text-blue-500'>Post User</li></Link>
    </ul>
  </div>
  <div className="navbar-end">
  
</div>
</div>
    );
};

export default Navbar;