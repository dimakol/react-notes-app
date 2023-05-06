import Modal, { RenderModalBackdropProps } from "react-overlays/Modal";

import "../Modal.css";

interface IDisplayNoteProps {
  show: boolean;
  handleClose: () => void;
  authorName: string;
  content: string;
}

const DisplayNote = ({
  show,
  handleClose,
  authorName,
  content,
}: IDisplayNoteProps) => {
  const renderBackdrop = (props: RenderModalBackdropProps) => (
    <div className="backdrop" {...props} />
  );

  return (
    <Modal
      className="modal"
      show={show}
      onHide={handleClose}
      renderBackdrop={renderBackdrop}
    >
      <div>
        <div className="modal-header">
          <div className="modal-title">A note from {authorName}</div>
        </div>
        <div className="modal-desc">
          <p>{content}</p>
        </div>
        <div className="modal-footer">
          <button className="secondary-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DisplayNote;
