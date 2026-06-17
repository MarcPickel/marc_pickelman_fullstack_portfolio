import RiddleModal from "../RiddleModal.jsx";

import { useState } from "react";

function RiddleFive({ isOpen, onClose }) {
  const [answer, setAnswer] = useState("");

  const answerFive = "Lead";
  const clueFive = "H";
  const title = "Portia's Puzzle";
  const onYes = "Claim her with a loving kiss!";
  let onNo = "";

  const handleChoices = () => {
    if (answer.toLowerCase() === "gold") {
      return (onNo = "All that glitters is not gold.");
    }
    if (answer.toLowerCase() === "silver") {
      return (onNo = "You find the picture of a clown.");
    }
  };
  handleChoices();

  const isCorrect = answer.toLowerCase() === answerFive.toLowerCase();

  return (
    <RiddleModal
      name="riddle-five"
      title={title}
      onClose={onClose}
      isOpen={isOpen}
      onYes={onYes}
      onNo={onNo}
      isCorrect={isCorrect}
      clue={clueFive}
    >
      <p className="modal__text">
        You are a prince, come to take to wife the beautiful Portia. Upon
        arriving at her palace, she directs you to a red curtain, which her
        servant throws open. There on a table are placed three caskets: one of
        gold, one of silver, and one of lead.
      </p>
      <p className="modal__text">
        She says in a stately voice, “My picture is in one of them, and if you
        choose correctly, you will win me as your bride.”
      </p>
      <p className="modal__text">
        Eyeing the caskets more closely, you notice a clue hanging above each
        one:
      </p>
      <div className="modal__content">
        <p className="modal__text modal__text_italic">
          Lead: "Who chooseth me must give and hazard all he hath."
        </p>
        <p className="modal__text modal__text_italic">
          Silver: "Who chooseth me shall get as much as he deserves."
        </p>
        <p className="modal__text modal__text_italic">
          Gold: "Who chooseth me shall gain what many men desire."
        </p>
      </div>
      <input
        className="modal__input"
        type="text"
        id="riddle-five"
        name="riddle-five"
        placeholder="Make your choice."
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      />
    </RiddleModal>
  );
}

export default RiddleFive;
