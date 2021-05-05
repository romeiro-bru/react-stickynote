import React from "react";
import "./style.css";
import { CgCloseR } from "react-icons/cg";

export function StickyNote({ list, setList }) {
  const handleRemove = (itemIndex) => {
    setList(list.filter((_, index) => index !== itemIndex));
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li className="notes" key={index}>
          {item}
          <button onClick={() => handleRemove(index)}>
            <CgCloseR className="close" />
          </button>
        </li>
      ))}
    </ul>
  );
}
