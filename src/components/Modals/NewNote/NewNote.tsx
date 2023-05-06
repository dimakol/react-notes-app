import { useState } from "react";
import Modal, { RenderModalBackdropProps } from "react-overlays/Modal";

import INote from "../../../interface/INote";

import "../Modal.css";
import "./NewNote.css";

interface INewNoteProps {
  show: boolean;
  handleClose: () => void;
  handleAdd: ({
    authorName,
    content,
  }: Pick<INote, "authorName" | "content">) => void;
}

const NewNote = ({ show, handleClose, handleAdd }: INewNoteProps) => {
  const [authorName, setAuthorName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const renderBackdrop = (props: RenderModalBackdropProps) => (
    <div className="backdrop" {...props} />
  );

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    handleAdd({ authorName, content });
    closeForm();
  };

  const closeForm = () => {
    setAuthorName("");
    setContent("");
    handleClose();
  };

  return (
    <Modal
      className="modal"
      show={show}
      onHide={closeForm}
      renderBackdrop={renderBackdrop}
    >
      <form onSubmit={submitForm}>
        <div className="modal-header">
          <div className="modal-title">Post a new note</div>
        </div>
        <div className="modal-desc">
          <label>Author Name:</label>
          <br></br>
          <input
            className="input-author-name"
            type="text"
            name="author_name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
          <br></br>
          <br></br>

          <label htmlFor="textarea_content">What could you like to say ?</label>
          <br></br>
          <textarea
            id="textarea_content"
            name="content"
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="modal-footer">
          <button className="secondary-button" onClick={closeForm}>
            Cancel
          </button>
          <button className="primary-button" type="submit">
            Post
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewNote;
