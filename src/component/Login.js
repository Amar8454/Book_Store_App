import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_4" className="modal ">
          <div className="modal-box w-72 max-w-5xl dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className=" outline-none ml-56 mt-2"
                onClick={() => document.getElementById("my_modal_4").closest()}
              >
                X
              </Link>

              <h3 className="font-bold text-lg font-serif ">Login</h3>
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
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-center">
                <button className="bg-pink-500 text-white  hover:bg-pink-700 items-center text-center p-2 mt-4 rounded-md">
                  Login
                </button>
              </div>
              <div className="text-center ">
                <p>
                  Not registered?
                  <Link
                    to="/signup"
                    className=" underline cursor-pointer text-blue-500"
                  >
                    Signup
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
