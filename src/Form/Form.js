import React from "react";
import "./style.css";

import { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import add from "./add.svg";

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

  const handleRemove = (itemIndex) => {
    setList(list.filter((_, index) => index !== itemIndex));
  };
  // console.log(`input => ${input}`);
  // console.log(`list => ${list}`);

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
      <section className="stickynotes">
        <ul>
          {list.map((item, index) => (
            <li className="notes" key={index}>
              {item}
              <button onClick={() => handleRemove(index)}>
                <CgCloseR className="check" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
