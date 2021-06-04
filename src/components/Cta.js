import React from "react";
import style from "./Header.module.css";

function Cta() {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <h1 style={{ marginBottom: "35px" }}>Ready To Build Your Community?</h1>
      </div>
      <button type="submit">Get Started For Free</button>
    </div>
  );
}

export default Cta;
