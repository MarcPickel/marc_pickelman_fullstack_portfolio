import "./RiddleModal.css";

import { useState, useEffect } from "react";

import close from "../../assets/close-icon.svg";

function RiddleModal({ name, title, children, isOpen, onClose }) {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const answerOne = "Man";
  const answerTwo = "Mellon";
  const answerThree = "One";
  const answerFour = "Dark";
  const answerFive = "Lead";

  const clueOne = "L";
  const clueTwo = "A";
  const clueThree = "U";
  const clueFour = "G";
  const clueFive = "H";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isCorrect = answer.toLowerCase() === answerOne.toLowerCase();

  useEffect(() => {
    if (!isOpen || !onClose) {
      return;
    }

    const handleEscape = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
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
          <button
            className="modal__submit-button"
            type="submit"
            disabled={!isCorrect}
          >
            Attempt
          </button>
          {submitted && (
            <p>{isCorrect ? "You may pass" : "The sphinx leaps at you."}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default RiddleModal;
