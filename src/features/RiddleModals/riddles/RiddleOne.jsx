import RiddleModal from "../RiddleModal.jsx";

import { useState } from "react";

function RiddleOne({ isOpen, onClose }) {
  const [answer, setAnswer] = useState("");

  // If !isCorrect = "The sphinx springs upon you!"
  // If isCorrect = "You may pass."
  const answerOne = "Man";
  const clueOne = "L";
  const title = "The Riddle of the Sphinx";
  const onYes = "You may pass.";
  const onNo = "The sphinx leaps upon you!";

  const isCorrect = answer.toLowerCase() === answerOne.toLowerCase();

  return (
    <RiddleModal
      name="riddle-one"
      title={title}
      onClose={onClose}
      isOpen={isOpen}
      onYes={onYes}
      onNo={onNo}
      isCorrect={isCorrect}
      clue={clueOne}
    >
      <p className="modal__text">
        Traveling down a winding, mountainous road, you spy a small precipice,
        upon which stands a menacing sphinx. The terrible creature glares at
        your approach and snarls, showing its poignant, yellow teeth.
      </p>
      <p className="modal__text">"Halt!" it cries.</p>
      <p className="modal__text">"Before I let you pass, answer me a word:</p>
      <div className="modal__content">
        <p className="modal__text modal__text_italic">
          "What is that which in the morning goes upon four feet,
        </p>
        <p className="modal__text modal__text_italic">
          "Upon two feet in the afternoon,
        </p>
        <p className="modal__text modal__text_italic">
          "And in the evening upon three?"
        </p>
      </div>
      <input
        className="modal__input"
        type="text"
        id="riddle-one"
        name="riddle-one"
        placeholder="Answer but a word"
        minLength="1"
        maxLength="30"
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      />
    </RiddleModal>
  );
}

export default RiddleOne;
