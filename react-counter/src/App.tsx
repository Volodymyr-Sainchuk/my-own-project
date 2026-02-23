import styles from "./App.module.css";
import Counter from "./components/counter";
import UseCard from "./components/component";
import ToggleText from "./components/toggleText";
import NoteList from "./components/listItems";
import NoteListToDelete from "./components/noteListDelete";
import ControlInput from "./components/controlInput";
import { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import UsersList from "./components/UserLIst";

function App() {
  const [showUsers, setShowUsers] = useState(true);
  const [dark, setDark] = useState(false);
  return (
    <div className={`${styles.body} ${dark ? styles.dark : styles.light}`}>
      <Header dark={dark} setDark={setDark} />
      <button onClick={() => setDark((prev) => !prev)}>Toggle theme</button>
      <h1>My react App</h1>
      <Counter />
      <UseCard name="Vova" age={16} country="UK" />
      <>
        <button onClick={() => setShowUsers((prev) => !prev)}>{showUsers ? "Hide users" : "Show users"}</button>

        {showUsers && <UsersList />}
      </>
      <ToggleText />
      <NoteList />
      <NoteListToDelete />
      <ControlInput />
      <Footer dark={dark} />
    </div>
  );
}

export default App;
