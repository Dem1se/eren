import "./navbar.css";
import Navbar from "./navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Nav() {
  return (
    //  <div>
    //   <div class="space">
    //      <button class="btn">Sign in</button>
    //      <button class="btn">Sign up</button>
    //    </div>
    //  </div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/about" />
      </Routes>
    </Router>
  );
}

export default Nav;
