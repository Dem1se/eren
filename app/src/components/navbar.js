import "./navbar.css";
import Navbar from "./navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/About";

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
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Routes>
    </Router>
  );
}

export default Nav;
