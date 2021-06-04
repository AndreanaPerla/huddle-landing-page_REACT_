import React from "react";
import style from "./Top.module.css";
import logo from "../images/logo.svg";

function Top() {
  return (
    <div className={style.top_bar}>
      <img src={logo} alt="" />
      <button type="submit">Try It Free</button>
    </div>
  );
}

export default Top;
