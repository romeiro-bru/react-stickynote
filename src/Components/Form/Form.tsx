import React from "react";
import "./style.css";
import { useState } from "react";
import add from "../../assets/svg/add.svg";
import { StickyNote } from "../StickyNote/StickyNote";

export function Form() {
  const [input, setInput] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
    return input && setList([...list, input]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder=" leave a note here"
          onChange={handleChange}
        />
        <button>
          <img src={add} alt="add" />
        </button>
      </form>
      <section>
        <StickyNote list={list} setList={setList} />
      </section>
    </>
  );
}