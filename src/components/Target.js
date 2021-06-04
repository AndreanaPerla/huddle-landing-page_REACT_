import React from "react";
import style from "./Target.module.css";
import community from "../images/icon-communities.svg";
import message from "../images/icon-messages.svg";

function Target() {
  return (
    <div className={style.container}>
      <div className={style.communities}>
        <img src={community} alt="" />
        <h1>1.4k+</h1>
        <p>Communities Formed</p>
      </div>
      <div className={style.messages}>
        <img src={message} alt="" />
        <h1>2.7m+</h1>
        <p>Messages Sent</p>
      </div>
    </div>
  );
}

export default Target;
