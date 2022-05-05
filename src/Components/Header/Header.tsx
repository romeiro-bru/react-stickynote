import React from "react";
import "./style.css";
import atom from "../../assets/svg/atom.svg";

export function Header() {
  return (
    <>
      <h1>
        30 days of React
        <img src={atom} alt="react" className="spin" />
      </h1>
      <h2>Day 6</h2>
    </>
  );
}
