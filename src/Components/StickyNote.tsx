import React, { SetStateAction } from "react";
import { CgCloseR } from "react-icons/cg";

type StickyNote = {
  list: string[],
  setList: React.Dispatch<SetStateAction<string[]>>,
}


export function StickyNote({ list, setList }: StickyNote) {
  const handleRemove = (itemIndex: number) => {
    setList(list.filter((_, index) => index !== itemIndex));
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li className="max-w-sm  even:bg-[#808f9e] shadow-lg py-4 px-2 mx-auto my-4 justify-between flex text-left font-semibold rounded-sm bg-amber-200" key={index}>
          {item}
          <button onClick={() => handleRemove(index)}>
            <CgCloseR className="text-lg mr-2 duration-300 hover:opacity-60" />
          </button>
        </li>
      ))}
    </ul>
  );
}
