import React from "react";
import profile_photo from "./images/profile.jpg";
import profile_icon from "./images/user.png";
import envelope from "./images/envelope.png";
import settings from "./images/settings.png";
import "./profile.css";
import transaction_image from "./images/transaction.png";

export default function Profile1() {
  function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }
  return (
    <div>
      <div class="action">
        <div class="profile" onClick={menuToggle}>
          <img src={profile_photo} alt="Image" />
        </div>
        <div class="menu">
          <h3>Name</h3>
          <ul>
            <li>
              <img src={profile_icon} />
              <a href="#">My profile</a>
            </li>
            <li>
              <img src={transaction_image} />
              <a href="#">Previous</a>
            </li>{" "}
            <li>
              <img src={settings} />
              <a href="#">settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
