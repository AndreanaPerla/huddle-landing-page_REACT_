import React from "react";
import style from "./Grow.module.css";
import grow from "../images/illustration-grow-together.svg";
import bg_top from "../images/bg-section-top-desktop-1.svg";
import bg_bottom from "../images/bg-section-bottom-desktop-1.svg";

function Grow() {
  return (
    <div className={style.grow_section}>
      <img className={style.grow_bg} src={bg_top} alt="" />
      <div className={style.grow_main}>
        <div className={style.grow_text}>
          <h1>Grow Together</h1>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <img className={style.grow_img} src={grow} alt="" />
      </div>
      <img className={style.grow_bg} src={bg_bottom} alt="" />
    </div>
  );
}

export default Grow;
