import "./ConFormStyles.css";

import React from "react";

const ConForm = () => {
  return (
    <div className="formo">
      <form>
        <label> Your Name</label>
        <input type="text" />
        <label> Email</label>
        <input type="email" />
        <label> Subject</label>
        <input type="text" />
        <label> Message</label>
        <textarea placeholder="Type Your Message here" rows="6"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ConForm;
