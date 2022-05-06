import React from "react";
import "./styles.css";
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form/Form";

export default function App() {
  return (
    <div className="text-center min-h-screen bg-[#193549]">
      <Header />
      <Form />
    </div>
  );
}
