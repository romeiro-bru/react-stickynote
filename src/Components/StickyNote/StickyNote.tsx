import React from "react";
import "./style.css";
import { CgCloseR } from "react-icons/cg";



export function StickyNote({ list, setList }: any) {
  const handleRemove = (itemIndex: number) => {
    setList(list.filter((_: any, index: number) => index !== itemIndex));
  };

  return (
    <ul>
      {list.map((item: string, index: number) => (
        <li className="shadow-lg py-4 px-2 my-6 mx-.5 justify-between flex text-left font-semibold rounded-sm bg-amber-200 notes" key={index}>
          {item}
          <button onClick={() => handleRemove(index)}>
            <CgCloseR className="text-lg mr-2 duration-300 hover:opacity-60" />
          </button>
        </li>
      ))}
    </ul>
  );
}
