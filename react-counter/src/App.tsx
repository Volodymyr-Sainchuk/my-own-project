import "./App.css";
import "./App.css";
import Counter from "./components/counter";
import UseCard from "./components/component";
import ToggleText from "./components/toggleText";
import NoteList from "./components/listItems";
import NoteListToDelete from "./components/noteListDelete";
import ControlInput from "./components/controlInput";
import { useState } from "react";
import Header from "./components/Header/header";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : "light"}>
      <Header dark={dark} setDark={setDark} />
      <button onClick={() => setDark((prev) => !prev)}>Toggle theme</button>
      <h1>My react App</h1>
      <Counter />
      <UseCard name="Vova" age={16} country="UK" />
      <ToggleText />
      <NoteList />
      <NoteListToDelete />
      <ControlInput />
    </div>
  );
}

export default App;
