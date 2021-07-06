import React from "react";
import "./style.css";
import { useState } from "react";
import add from "../../../public/assets/svgs/add.svg";

import { StickyNote } from "../StickyNote/StickyNote";

export function Form() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    input && setList([...list, input]);
    setInput("");
    event.preventDefault();
  };

  return (
    <>
      <form>
        <input
          value={input}
          placeholder=" leave a note here"
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>
          <img src={add} alt="add" />
        </button>
      </form>
      <section>
        <StickyNote list={list} setList={setList} />
      </section>
    </>
  );
}
