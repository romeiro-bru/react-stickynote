import "./styles.css";
import { Header } from "./Header/Header";
import { useState } from "react";
import add from "./add.svg";
import { CgCloseR } from "react-icons/cg";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  console.log(`input => ${input}`);

  const handleInput = (event) => {
    setInput(event.target.value);
    // console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    input && setList([...list, input]);
    event.preventDefault();
  };

  const handleRemove = (itemIndex) => {
    setList(list.filter((_, index) => index !== itemIndex));
  };

  console.log(`list => ${list}`);

  return (
    <div className="App">
      <Header />
      <form>
        <input onChange={handleInput} />
        <button onClick={handleSubmit}>
          <img src={add} alt="add" />
        </button>
      </form>
      <section className="stickynotes">
        <ul>
          {list.map((item, index) => (
            <li className="notes" key={index}>
              {item}
              <button onClick={() => handleRemove(index)}>
                <CgCloseR className="check" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
