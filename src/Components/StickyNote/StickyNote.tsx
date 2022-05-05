import React from "react";
import "./style.css";
import { CgCloseR } from "react-icons/cg";

export function StickyNote({ list, setList }) {
  const handleRemove = (itemIndex: number) => {
    setList(list.filter((_: any, index: number) => index !== itemIndex));
  };

  return (
    <ul>
      {list.map((item: string, index: number) => (
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
