import React from "react";
import { gmAction, gnAction } from "../src/Message.action";

const Message = () => {
  let msg = "Hello";

  return (
    <div>
      <h1>Message : {msg}</h1>
      <button>GM</button>
      <button>GN</button>
    </div>
  );
};
export default Message;
