import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(fullNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, fullNote];
    });
  }
  function DeleteNote(iid) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== iid;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={DeleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
