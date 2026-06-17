import RiddleModal from "../RiddleModal.jsx";

import { useState } from "react";

function RiddleThree({ isOpen, onClose }) {
  const [answer, setAnswer] = useState("");

  const answerThreeString = "One";
  const answerThreeNumber = "1";
  const clueThree = "U";
  const title = "Going to St. Ives";
  const onYes = "Go play.";
  const onNo = "He points to the pigsty.";

  const isCorrect =
    answer.toLowerCase() === answerThreeString.toLowerCase() ||
    answer === answerThreeNumber;

  return (
    <RiddleModal
      name="riddle-three"
      title={title}
      onClose={onClose}
      isOpen={isOpen}
      onYes={onYes}
      onNo={onNo}
      isCorrect={isCorrect}
      clue={clueThree}
    >
      <p className="modal__text">
        Your father returns home from his trip to St. Ives late and goes to bed
        without a word. Next morning, he rises early and gets to working around
        the farm. At breakfast, he says to you:
      </p>
      <p className="modal__text modal__text_italic">
        "If you can solve this math problem I tell you, you can go play. If you
        can't, you've got to clean out the pigsty.
      </p>
      <div className="modal__content">
        <p className="modal__text modal__text_italic">
          As I was going to St Ives,
        </p>
        <p className="modal__text modal__text_italic">
          I met a man with seven wives,
        </p>
        <p className="modal__text modal__text_italic">
          Each wife had seven sacks,
        </p>
        <p className="modal__text modal__text_italic">
          Each sack had seven cats,
        </p>
        <p className="modal__text modal__text_italic">
          Each cat had seven kits:
        </p>
        <p className="modal__text modal__text_italic">
          Kits, cats, sacks, and wives,
        </p>
        <p className="modal__text modal__text_italic">
          How many were there going to St Ives?
        </p>
      </div>
      <input
        className="modal__input"
        type="text"
        id="riddle-three"
        name="riddle-three"
        placeholder="What do you figure?"
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      />
    </RiddleModal>
  );
}

export default RiddleThree;
