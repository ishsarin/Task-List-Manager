import React, { useState } from "react";

export const AddTask = ({ onAdd, click }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      onAdd({ text });
      setText("");
      const input = document.getElementById("input");
      input.value = "";
    } else {
      alert("Please enter the standard");
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="input-group flex-nowrap container">
        <input
          id="input"
          type="text"
          className="form-control "
          placeholder="Type your standard here"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </form>
  );
};
