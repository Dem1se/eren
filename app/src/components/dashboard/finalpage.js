import React from "react";
import "./finalpage2.css";

function Finalpage() {
  return (
    <div className="topbar">
      <div className="horizontal_line">
        <div className="sidebar">
          <div className="nav" style={{ fontFamily: "koulen" }}>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-stream"></i>
                  Overview
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-link"></i>
                  Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-rectangle"></i>
                  History
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fas fa-sliders-h"></i>
                  Services
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fas fa-question-circle"></i>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finalpage;
