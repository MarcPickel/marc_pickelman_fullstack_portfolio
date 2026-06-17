import RiddleModal from "../RiddleModal.jsx";

import { useState } from "react";
import { NavLink } from "react-router-dom";

function RiddleSix({ isOpen, onClose }) {
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [answerFive, setAnswerFive] = useState("");

  const secretPage = (
    <NavLink to="/secret">
      <span className="modal__link">Treasure</span>
    </NavLink>
  );

  let combinedAnswer = answerOne.concat(
    answerTwo,
    answerThree,
    answerFour,
    answerFive,
  );
  const answerSix = "LAUGH";
  const clueSix = secretPage;
  const title = "Gelachter";
  const onYes = "The door opens.";
  const onNo = "The door does not budge.";

  const isCorrect = combinedAnswer.toLowerCase() === answerSix.toLowerCase();

  const handleChange = (e) => {
    let target = e.target;
    let val = target.value;

    if (val !== "") {
      const next = target.nextElementSibling;
      if (next) {
        next.focus();
      }
    }
  };

  const handleKeyDown = (e) => {
    let target = e.target;
    let key = e.key.toLowerCase();

    if (key === "backspace" || key === "delete") {
      target.value = "";
      let prev = target.previousElementSibling;
      if (prev) {
        prev.focus();
      }
    }
  };

  return (
    <RiddleModal
      name="riddle-six"
      title={title}
      onClose={onClose}
      isOpen={isOpen}
      onYes={onYes}
      onNo={onNo}
      isCorrect={isCorrect}
      clue={clueSix}
    >
      <p className="modal__text">
        You pull back the book to discover a secret door! Taking the burning
        candlestick from your desk, you pass through the door into a long, dark
        passageway.
      </p>
      <p className="modal__text">
        It seems to go on, and on, and on. You begin to wonder if there is even
        an end to it. Suddenly, you spy a gold light emanating from what must be
        the end of the passageway.
      </p>
      <p className="modal__text">
        You come to a gold, illuminated inscription on the wall, beside which
        stands a heavy, oak door. You notice the inscription is incomplete with
        five empty slots where you think runes might fit. The inscription reads
        thus:
      </p>
      <div className="modal__content">
        <p className="modal__text modal__text_italic">
          Food is not your present liking?
        </p>
        <p className="modal__text modal__text_italic">
          Drink is not to you inviting?
        </p>
        <p className="modal__text modal__text_italic">
          Tell me now and tell me true,
        </p>
        <p className="modal__text modal__text_italic">
          What has made you sad and blue?
        </p>
        <p className="modal__text modal__text_italic">
          Are you sick? How can you tell?
        </p>
        <p className="modal__text modal__text_italic">
          Medicine won't make you well?
        </p>
        <p className="modal__text modal__text_italic">
          Mark my words, my better half:
        </p>
        <p className="modal__text modal__text_italic">
          All you have to do is...
        </p>
      </div>
      <div className="modal__input-container">
        <input
          className="modal__input modal__input_otp"
          type="text"
          id="riddle-six"
          name="riddle-six"
          maxLength={1}
          onChange={(e) => {
            setAnswerOne(e.target.value);
            handleChange(e);
          }}
          onKeyDown={handleKeyDown}
        />
        <input
          className="modal__input modal__input_otp"
          type="text"
          id="riddle-six"
          name="riddle-six"
          maxLength={1}
          onChange={(e) => {
            setAnswerTwo(e.target.value);
            handleChange(e);
          }}
          onKeyDown={handleKeyDown}
        />
        <input
          className="modal__input modal__input_otp"
          type="text"
          id="riddle-six"
          name="riddle-six"
          maxLength={1}
          onChange={(e) => {
            setAnswerThree(e.target.value);
            handleChange(e);
          }}
          onKeyDown={handleKeyDown}
        />
        <input
          className="modal__input modal__input_otp"
          type="text"
          id="riddle-six"
          name="riddle-six"
          maxLength={1}
          onChange={(e) => {
            setAnswerFour(e.target.value);
            handleChange(e);
          }}
          onKeyDown={handleKeyDown}
        />
        <input
          className="modal__input modal__input_otp"
          type="text"
          id="riddle-six"
          name="riddle-six"
          maxLength={1}
          onChange={(e) => {
            setAnswerFive(e.target.value);
            handleChange(e);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
    </RiddleModal>
  );
}

export default RiddleSix;
