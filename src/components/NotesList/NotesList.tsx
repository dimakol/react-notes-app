import Note from "./Note/Note";
import AddNote from "./AddNote/AddNote";
import INote from "../../interface/INote";

import "./NotesList.css";

interface INotesProps {
  notes: INote[];
  handleAddNote: ({
    authorName,
    content,
  }: Pick<INote, "authorName" | "content">) => void;
  handleUpdateNote: ({ id, authorName, content }: Omit<INote, "date">) => void;
  handeDeleteNote: (id: string) => void;
}

const NotesList = ({
  notes,
  handleAddNote,
  handleUpdateNote,
  handeDeleteNote,
}: INotesProps) => {
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          authorName={note.authorName}
          content={note.content}
          date={note.date}
          handleUpdateNote={handleUpdateNote}
          handeDeleteNote={handeDeleteNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
