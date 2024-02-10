import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { context } from "../../Context/Context";

const PostUser = () => {
  const { users, setUsers } = useContext(context);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
    
        console.log(data);
      });
  };

  return (
    <div className="lg:mt-20 lg:ml-40">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <label className="block mb-5 text-xl text-gray-500">name</label>
            <input
              type="text"
              placeholder="name"
              {...register("name")}
              className="input input-bordered w-3/4 mb-5 placeholder:text-gray-400"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label className="block mb-5 text-xl text-gray-500">Email</label>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className="input mb-5 input-bordered w-3/4 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <label className="block mb-5 text-xl text-gray-500">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company Name"
              {...register("company_name")}
              className="input input-bordered w-3/4 mb-5 placeholder:text-gray-400"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label className="block mb-5 text-xl text-gray-500">Street</label>
            <input
              type="text"
              placeholder="Street"
              {...register("street")}
              className="input mb-5 input-bordered w-3/4 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <label className="block mb-5 text-xl text-gray-500">Suite</label>
            <input
              type="text"
              placeholder="Suite"
              {...register("suite")}
              className="input input-bordered w-3/4 mb-5 placeholder:text-gray-400"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label className="block mb-5 text-xl text-gray-500">City</label>
            <input
              type="text"
              placeholder="City"
              {...register("city")}
              className="input mb-5 input-bordered w-3/4 placeholder:text-gray-400"
            />
          </div>
        </div>

        <input
          type="submit"
          className="w- 40 text-white text-xl btn btn-info"
        />
      </form>
    </div>
  );
};

export default PostUser;
