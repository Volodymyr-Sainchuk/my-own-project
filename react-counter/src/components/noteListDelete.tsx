import { useState } from "react";

function NoteListToDelete() {
  const [notes, setNotes] = useState(["React", "TypeScript", "TanStack Query"]);

  const handleDelete = (noteToDelete) => {
    setNotes((prev) => prev.filter((note) => note !== noteToDelete));
  };

  if (notes.length === 0) {
    return <p>Your list is empty</p>;
  }

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note}>
            {note}
            {""}
            <button onClick={() => handleDelete(note)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteListToDelete;
