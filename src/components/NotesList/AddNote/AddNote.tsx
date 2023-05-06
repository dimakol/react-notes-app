import { useState } from "react";

import NewNote from "../../Modals/NewNote/NewNote";
import INote from "../../../interface/INote";

import "./AddNote.css";

interface IAddNoteProps {
  handleAddNote: ({
    authorName,
    content,
  }: Pick<INote, "authorName" | "content">) => void;
}

const AddNote = ({ handleAddNote }: IAddNoteProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <fieldset className="note-container">
        <legend>Add new note...</legend>
        <div className="note new" onClick={() => setShowModal(true)}></div>
      </fieldset>

      <NewNote
        show={showModal}
        handleClose={handleCloseModal}
        handleAdd={handleAddNote}
      />
    </>
  );
};

export default AddNote;
