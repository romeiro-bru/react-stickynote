import React from "react";
import "./styles.css";
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form/Form";

export default function App() {
  return (
    <div className="text-center min-h-screen bg-cyan-900">
      <Header />
      <Form />
    </div>
  );
}
