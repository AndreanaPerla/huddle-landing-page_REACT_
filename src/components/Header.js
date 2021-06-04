import React from "react";
import style from "./Header.module.css";
import mockup from "../images/screen-mockups.svg";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddie re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
      </div>
      <button type="submit">Get Started For Free</button>
      <img src={mockup} alt="" />
    </div>
  );
}

export default Header;
