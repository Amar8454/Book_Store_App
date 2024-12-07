import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="flex h-screen items-center justify-center border">
        <div className="modal-box w-72 max-w-5xl dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className=" outline-none ml-60 mt-2">
              X
            </Link>

            <h3 className="font-bold text-lg font-serif mt-2">SignUp</h3>
            <div className="mt-2 space-y-2">
              <span>Name :- </span>
              <br />
              <input
                type="text"
                placeholder="Enter you Full Name"
                className="outline-none border px-3 w-64 py-1 rounded-md dark:bg-slate-900 dark:text-white"
                {...register("name", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email :- </span>
              <br />
              <input
                type="email"
                placeholder="Enter you email"
                className="outline-none border px-3 w-64 py-1 rounded-md dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password :- </span>
              <br />
              <input
                type="password"
                placeholder="Enter you password"
                className="outline-none border px-3 py-1 w-64 rounded-md dark:bg-slate-900 dark:text-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-center">
              <button className="bg-pink-500 text-white  hover:bg-pink-700 items-center text-center px-4 p-2 mt-4 rounded-md">
                Signup
              </button>
            </div>
            <div className="text-center ">
              <p>
                Have account?{" "}
                <button
                  to="/"
                  className=" underline cursor-pointer text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
