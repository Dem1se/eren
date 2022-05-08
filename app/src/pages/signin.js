import React from "react";
import { useState } from "react";
import "./signin.css";
import { BrowserRouter as Router, Routers, Route } from "react-router-dom";

export const Signin = () => {
  return (
    <div className="container">
      <form className="padd">
        <h1 className="alig ">Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
