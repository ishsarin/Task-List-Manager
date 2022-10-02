import React from "react";

export const Buttons = ({ text, clicked }) => {
  return (
    <div className="container pt-2">
      <button className="btn btn-lg w-100 btn-primary" onClick={clicked}>
        {text !== "Close" ? <span>&#8853;</span> : ""}
        &nbsp;
        {text}
      </button>
    </div>
  );
};
