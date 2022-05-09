import React from "react";
import { useState } from "react";
import add from "../assets/svg/add.svg";
import { StickyNote } from "./StickyNote";

export function Form() {
  const [input, setInput] = useState("");
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
          className="p-1.5 my-9 bg-transparent rounded-lg	border-2 border-amber-200 text-white text-lg"
        />
        <button className="outline-0 align-middle mt-0 mb-2 mx-2">
          <img src={add} alt="add" className="w-9 duration-300 hover:opacity-90" />
        </button>
      </form>
      <section>
        <StickyNote list={list} setList={setList} />
      </section>
    </>
  );
}
