import React from "react";
import style from "./Conversations.module.css";
import conversation from "../images/illustration-flowing-conversation.svg";

function Conversations() {
  return (
    <div className={style.conversation_main}>
      <img className={style.conversation_img} src={conversation} alt="" />
      <div className={style.conversation_text}>
        <h1>Flowing Conversations</h1>
        <p>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </div>
  );
}

export default Conversations;
