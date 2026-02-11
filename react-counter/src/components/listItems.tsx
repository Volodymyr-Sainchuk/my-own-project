function NoteList() {
  const notes = ["React", "TypeScript", "TanStack Query"];

  if (notes.length === 0) {
    return null;
  }

  return (
    <ul>
      {notes.map((note) => (
        <li key={note}>{note}</li>
      ))}
    </ul>
  );
}

export default NoteList;
