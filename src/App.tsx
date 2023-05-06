import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import NotesList from "./components/NotesList/NotesList";
import INote from "./interface/INote";

import "./App.css";

const defaultNotes = [
  {
    id: nanoid(),
    authorName: "Dmitry Kolyas",
    content: "This is my first note!",
    date: "5/5/2023",
  },
  {
    id: nanoid(),
    authorName: "Dmitry Kolyas",
    content: "This is my second note!",
    date: "5/6/2023",
  },
  {
    id: nanoid(),
    authorName: "Dmitry Kolyas",
    content: "This is my third note!",
    date: "5/6/2023",
  },
  {
    id: nanoid(),
    authorName: "Dmitry Kolyas",
    content: "This is new note!",
    date: "5/6/2023",
  },
];

const App = () => {
  const [notes, setNotes] = useState<INote[]>(defaultNotes);

  const storedNotes = localStorage.getItem("react-notes-app-data");

  useEffect(() => {
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = ({
    authorName,
    content,
  }: Pick<INote, "authorName" | "content">) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      authorName: authorName,
      content: content,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const updateNote = ({ id, authorName, content }: Omit<INote, "date">) => {
    const updatedNotes = notes.map((note) => {
      // if id equals, update note
      if (note.id === id) {
        return { ...note, authorName: authorName, content: content };
      }

      // otherwise return the note as is
      return note;
    });
    setNotes(updatedNotes);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <h1 className="title">Welcome to post board</h1>
      <div className="container">
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleUpdateNote={updateNote}
          handeDeleteNote={deleteNote}
        />
      </div>
    </>
  );
};

export default App;
