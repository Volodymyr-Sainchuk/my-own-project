import "./App.css";
import Counter from "./components/counter";
import UseCard from "./components/component";
import ToggleText from "./components/toggleText";
import NoteList from "./components/listItems";
import NoteListToDelete from "./components/noteListDelete";

function App() {
  return (
    <div>
      <h1>My react App</h1>
      <Counter />
      <UseCard name="Vova" age={16} country="UK" />
      <ToggleText />
      <NoteList />
      <NoteListToDelete />
    </div>
  );
}

export default App;
