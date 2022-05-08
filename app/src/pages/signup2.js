import React from "react";
import { useState } from "react";
import "./signup2.css";
import { BrowserRouter as Router, Routers, Route } from "react-router-dom";

export const Signup2 = () => {
  return (
    <div className="container">
      <form className="padd">
        <h1 className="alig ">Sign Up</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>PAN Details</label>
            <input type="number" name="PAN number" placeholder="PAN Number" />
            <input
              type="file"
              name="PAN number"
              placeholder="PAN Document"
              className="panfileup"
            />
          </div>
          <div className="field">
            <label>Aadhar card Details</label>
            <input
              type="number"
              name="Aadhar card number"
              placeholder="Aadhar card Number"
            />
            <input
              type="file"
              name="Aadhar card "
              placeholder="Aadhar Document"
              className="aadharfileup"
            />
          </div>

          <div className="field">
            <label>Passport Details</label>
            <input
              type="number"
              name="Passport number"
              placeholder="Passport Number"
            />
            <input
              type="file"
              name="Passport card "
              placeholder="Passport Document"
              className="passportfileup"
            />
          </div>

          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup2;
