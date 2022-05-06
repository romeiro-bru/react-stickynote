import React from "react";
import "./style.css";
import atom from "../../assets/svg/atom.svg";

export function Header() {
  return (
    <>
      <h1 className="py-5 text-3xl text-fuchsia-400 font-bold">
        30 days of React
        <img src={atom} alt="react" className="spin w-10 m-auto" />
      </h1>
      <h2 className="text-3xl text-fuchsia-400 font-bold">Day 6</h2>
    </>
  );
}
