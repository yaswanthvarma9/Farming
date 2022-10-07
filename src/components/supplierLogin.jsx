import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../actions/supplierloginactions";
import Joi from "joi-browser";

const SupplierLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [errRes, setErrRes] = useState("");

  //Step1:  Define schema to validate email and password
  const schema = {
    username: Joi.string().min(1).required(),
    password: Joi.string().min(1).max(30).required()
  };

  // Step 2: Validate
  const validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(login, schema, {
      abortEarly: false,
    });
   // console.log(result.data);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  // connect store to get login and errMsg info

  const lgn = useSelector((state) => state.login);

  //setErrRes(useSelector((state) => state.login.errMsg));

  const handleChange = (event) => {
    const newLogin = { ...login };
    newLogin[event.target.name] = event.target.value;
    setLogin(newLogin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Step3: Call validate function
    // validate login details with schema
    setErrors(validate());

    if (errors) return;

    // dispatch login action to rest api
    dispatch(loginAction(login));

    // Based on loggedIn state redirect user to home or any other page
    // setTimeout(() => {
    //  alery    
    // }, 500);
  };
  console.log(login);

  return (
    <div className="w-50 mx-auto mt-4">
      {errRes && <p className="alert alert-danger">{errRes}</p>}
      <form
        onSubmit={handleSubmit}
        className="border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded"
      >
        <p className="text-center fs-4 bg-secondary text-white">Login Form</p>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            name="username"
            value={login.username}
            onChange={handleChange}
          />
          {errors && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
          {errors && <small className="text-danger">{errors.password}</small>}
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupplierLogin;
