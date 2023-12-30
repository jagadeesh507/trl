"use client";
import React from "react";
import { useForm } from "react-hook-form";
function Register() {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center pt-10">
      <form onSubmit={handleSubmit(onsubmit)} noValidate>
        <label className="form-control shadow-2xl w-full md:w-96 p-2 gap-2">
          <p className="text-2xl font-extrabold">Register</p>
          <div className="w-full">
            <span className="label-text">Name</span>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "Please enter your full name",
                minLength: {
                  value: 5,
                  message: "name length should be grater than 5",
                },
              })}
              className="input input-bordered w-full "
            />
            <p className="text-red-500 font-bold">{errors.username?.message}</p>
          </div>
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
          <div className="w-full">
            <span className="label-text">Password</span>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="************"
              id="repassword"
              {...register("repassword", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "password length should be grater than 8",
                },
                validate: (filedvale) =>
                  filedvale === getValues("password")
                    ? true
                    : "Passwords do not match",
              })}
            />
            <p className="text-red-500 font-bold">
              {errors.repassword?.message}
            </p>
          </div>
          <div className="flex flex-start gap-2">
            <input type="checkbox" className="checkbox checkbox-md " />
            {"  "}
            <span className="text-sm">I accept the Terms</span>
          </div>
          <button type="submit" className="btn btn-neutral btn-md">
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}

export default Register;
