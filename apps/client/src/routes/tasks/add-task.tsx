import React, { useState } from "react";
import { useTasksDispatch } from "./context";

let nextId = 3;

export const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text,
          });
        }}
      >
        Add
      </button>
    </>
  );
};
