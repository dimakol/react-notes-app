import { useState } from "react";
import { MdEditNote, MdDeleteForever } from "react-icons/md";

import DisplayNote from "../../Modals/DisplayNote/DisplayNote";
import UpdateNote from "../../Modals/UpdateNote/UpdateNote";
import INote from "../../../interface/INote";

import "./Note.css";

interface INoteProps {
  id: string;
  authorName: string;
  content: string;
  date: string;
  handleUpdateNote: ({ id, authorName, content }: Omit<INote, "date">) => void;
  handeDeleteNote: (id: string) => void;
}

const Note = ({
  id,
  authorName,
  content,
  date,
  handleUpdateNote,
  handeDeleteNote,
}: INoteProps) => {
  const [showDisplayModal, setShowDisplayModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleCloseDisplayModal = () => setShowDisplayModal(false);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  return (
    <>
      <fieldset className="note-container">
        <legend className="note-legend">{authorName}</legend>
        <div className="note">
          <span
            className="note-content"
            onClick={() => setShowDisplayModal(true)}
          >
            <p>{content.trim()}</p>
          </span>
          <div className="note-footer">
            <small>{date}</small>
            <div className="note-actions">
              <MdEditNote
                onClick={() => setShowUpdateModal(true)}
                className="update-icon"
                title="update note"
                size="1.3rem"
              />
              <MdDeleteForever
                onClick={() => handeDeleteNote(id)}
                className="delete-icon"
                title="delete note"
                size="1.3rem"
              />
            </div>
          </div>
        </div>
      </fieldset>

      <DisplayNote
        show={showDisplayModal}
        handleClose={handleCloseDisplayModal}
        authorName={authorName}
        content={content}
      />
      <UpdateNote
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}
        id={id}
        initialAuthorName={authorName}
        initialContent={content}
        handleUpdate={handleUpdateNote}
      />
    </>
  );
};

export default Note;
