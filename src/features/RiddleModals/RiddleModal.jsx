import "./RiddleModal.css";

import { useEffect } from "react";

function RiddleModal({
  name,
  title,
  answer,
  children,
  isOpen,
  onClose,
  onSubmit,
  isValid,
  isSolved,
}) {
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
    <div className="modal">
      <div
        className={`modal__container ${isOpen && "modal_open"} modal_type_${name}`}
        onClick={handleOverlay}
      >
        <button className="modal__close-button"></button>
        <p className="modal__title">{title}</p>
        <form className="modal__form" name={`${name}`} onClick={onSubmit}>
          {children}
          <button
            className="modal__submit-button"
            type="submit"
            disabled={!isValid}
          ></button>
        </form>
        <p className={`modal__answer ${isSolved && "modal__answer_visible"}`}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default RiddleModal;
