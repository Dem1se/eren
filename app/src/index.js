import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Nav from "./components/navbar";
import Signin from "./components/pages/signin";
import Signup from "./components/pages/signup";
import Signup2 from "./components/pages/signup2";
import Loading from "./components/loading/loading";
import TrailForms from "./components/demoform/form";
import FormSecondPort from "./components/demoform/formsecondportal";
import FormThirdPort from "./components/demoform/formthirdportal";
import Sign_in from "./components/demoform/signin";
import Profile1 from "./components/profile/profile1";
import DepositCard from "./components/depositcard/deposit";
import Finalpage from "./components/Final/finalpage";
import Circle from "./components/Final/circle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Finalpage />
      <Circle />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
