import "./RiddleModal.css";

import { useState, useEffect } from "react";

import close from "../../assets/close-icon.svg";

function RiddleModal({
  name,
  title,
  children,
  isOpen,
  onClose,
  onYes,
  onNo,
  isCorrect,
  clue,
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (!isOpen || !onClose) {
      return;
    }

    const handleEscape = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
        setSubmitted(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
      setSubmitted(false);
    }
  };

  return (
    <div
      className={`modal ${isOpen && "modal_open"} modal_type_${name}`}
      onClick={handleOverlay}
    >
      <div className="modal__container">
        <button className="modal__close-button" type="button" onClick={onClose}>
          <img src={close} className="modal__close-icon" />
        </button>
        <p className="modal__title">{title}</p>
        <form className="modal__form" name={`${name}`} onSubmit={handleSubmit}>
          {children}
          <div className="modal__submission">
            <button className="modal__submit-button" type="submit">
              Attempt
            </button>
            {submitted && (
              <p className="modal__answer">{isCorrect ? onYes : onNo}</p>
            )}
            {submitted && isCorrect && (
              <p className="modal__answer modal__answer_clue">{clue}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default RiddleModal;
