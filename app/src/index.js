import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Nav from "./components/navbar";
import Loading from "./components/loading/loading";
import TrailForms from "./components/demoform/form";
import FormSecondPort from "./components/demoform/formsecondportal";
import FormThirdPort from "./components/demoform/formthirdportal";
import Sign_in from "./components/demoform/signin";
import Profile1 from "./components/profile/profile";
import Finalpage from "./components/dashboard/finalpage";
import Circle from "./components/dashboard/circle";
import Mainfeed from "./components/mainfeed/mainfeed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Finalpage />
      <Mainfeed />
      <Circle />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
