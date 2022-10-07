import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { registerAction } from "../actions/farmerloginactions.js";
import { useNavigate } from "react-router-dom";

const FarmerRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [farmer, setFarmer] = useState({
    username: "",
    password: "",
    address:"",
    phoneNo:"",
    name:""
  });

  //const farm = useSelector((state) => state.login.farmer);

  const handleChange = (event) => {
    const newFarmer = { ...farmer };
    newFarmer[event.target.name] = event.target.value;
    setFarmer(newFarmer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAction(farmer));
    alert("Farmer  added successfully!");
    navigate("/");
  };
  console.log(farmer);
  return (
    <div>
      <h1>Register Page</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-50 mx-auto border border-secondary rounded mt-4 p-2 shadow-lg p-3 mb-5 bg-body rounded"
        >
          <p className="text-center fs-4 bg-secondary text-white">
            Register Form
          </p>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              name="name"
              value={farmer.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={farmer.username}
              onChange={handleChange}
            />
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
              value={farmer.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="address"
              className="form-control"
              id="address"
              name="address"
              value={farmer.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNo"
              name="phoneNo"
              value={farmer.phoneNo}
              onChange={handleChange}
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmerRegister;