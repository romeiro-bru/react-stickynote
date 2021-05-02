import "./styles.css";
import { Header } from "./Header/Header";
import { useState } from "react";
import add from "./add.svg";
import { AiFillCheckCircle } from "react-icons/ai";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  // console.log(`input => ${input}`);

  const handleInput = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    if (input) {
      setList([...list, input]);
    }
    event.preventDefault();
  };

  const handleRemove = () => {
    console.log("removido");
  };

  console.log(`note => ${list}`);

  return (
    <div className="App">
      <Header />
      <form>
        <input onChange={handleInput} />
        <button type="submit" onClick={handleSubmit}>
          <img src={add} alt="add" />
        </button>
      </form>
      <section className="stickynotes">
        <ul>
          {list.map((item, index) => (
            <li className="notes" key={index}>
              {item}
              <button onClick={handleRemove}>
                <AiFillCheckCircle size={25} className="check" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
