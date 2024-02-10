import React, { useContext, useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import { context } from "../../Context/Context";

const User = () => {
  const {users,setUsers}=useContext(context)
  const [search, setSearch] = useState("");
  
  
  const [selectedOption, setSelectedOption] = useState("Name");

  const name='Name';
  const email='Email';
  const company='Company Name';

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
 
  const filterHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  
  const selectHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  const filter = users.filter((user) => {
    const filterSearch = search.toLowerCase();
    const filterFirstName = user.name.toLowerCase();
    const filterEmail = user.email.toLowerCase();
    const filterCompanyName = user.company.name.toLowerCase(); 
  
    switch (selectedOption) {
      case "Name":
        return filterFirstName.includes(filterSearch)
      case "Email":
        return filterEmail.includes(filterSearch);
      case "Company Name":
        return filterCompanyName.includes(filterSearch);
      default:
        return true; 
    }
  });

  return (
    <div>
      <h1 className="mt-20 font-bold text-blue-500 text-2xl tracking-wide">
        All informations about user
      </h1>
      <input
        onChange={filterHandler}
        type="text"
        placeholder="Type Name To Find User"
        className="input input-bordered input-info mt-10 w-full max-w-xs"
      />
      <select value={selectedOption} onChange={selectHandler} className="select select-info w-full max-w-xs">
        <option disabled selected>
          Sort By
        </option>
        <option>{name}</option>
        <option>{email}</option>
        <option>{company}</option>
      </select>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filter.map((user, i) => (
          <SingleUser key={i}  user={user}></SingleUser>
        ))}
      </div>
    </div>
  );
};

export default User;
