import "./styles.css";
import { Header } from "./Header/Header";
import { useState } from "react";
import add from "./add.svg";
import checked from "./checked.svg";

export default function App() {
  const [stickynote, setStickynote] = useState([]);
  const [list, setList] = useState([]);

  // console.log(`list => ${list}`);
  // console.log(`stickynote => ${stickynote}`);

  const handleInput = (event) => {
    setStickynote(event.target.value);
    // console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    if (stickynote) {
      setList(list.concat(stickynote));
    }
    setStickynote();
    event.preventDefault();
  };

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
              <img src={checked} alt="rmv" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
