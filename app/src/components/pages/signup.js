import React from "react";
import { useState } from "react";
import "./signout.css";
import { BrowserRouter as Router, Routers, Route } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="container">
      <form className="padd">
        <h1 className="alig ">Sign Up</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Name</label>

            <div className="nameBtn">
              <input type="text" name="Name" placeholder="First Name" />
              <input
                type="text"
                name="Name"
                placeholder="Last Name"
                className="lastName"
              />
            </div>
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="field">
            <label>Date Of Birth</label>
            <input type="date" name="dob" placeholder="hello" />
          </div>
          <div className="field">
            <label>Phone number</label>
            <input
              type="number"
              name="phone number"
              placeholder="Phone Number"
            />
          </div>
          <div className="field">
            <label>New Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
            />
          </div>
          <button className="btn">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
