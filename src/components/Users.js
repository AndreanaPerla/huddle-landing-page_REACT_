import React from "react";
import style from "./Users.module.css";
import users from "../images/illustration-your-users.svg";
import bg_top from "../images/bg-section-top-desktop-2.svg";
import bg_bottom from "../images/bg-section-bottom-desktop-2.svg";

function Users() {
  return (
    <div className={style.users_section}>
      <img className={style.users_bg} src={bg_top} alt="" />
      <div className={style.users_main}>
        <div className={style.users_text}>
          <h1>Your Users</h1>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <img className={style.users_img} src={users} alt="" />
      </div>
      <img className={style.users_bg} src={bg_bottom} alt="" />
    </div>
  );
}

export default Users;
