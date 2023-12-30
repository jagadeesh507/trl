"use client";
import React from "react";
import { useForm } from "react-hook-form";
function Login() {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center pt-10">
      <form onSubmit={handleSubmit(onsubmit)} noValidate>
        <label className="form-control shadow-2xl w-full md:w-96 p-2 gap-2">
          <p className="text-2xl font-extrabold">Login</p>
          <div className="w-full">
            <span className="label-text">Email</span>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="input input-bordered w-full "
            />
            <p className="text-red-500 font-bold">{errors.email?.message}</p>
          </div>
          <div className="w-full">
            <span className="label-text">Password</span>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="************"
              id="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "password length should be grater than 8",
                },
              })}
            />
            <p className="text-red-500 font-bold">{errors.password?.message}</p>
          </div>
          <button type="submit" className="btn btn-neutral btn-md">
            Login
          </button>
        </label>
      </form>
    </div>
  );
}

export default Login;
