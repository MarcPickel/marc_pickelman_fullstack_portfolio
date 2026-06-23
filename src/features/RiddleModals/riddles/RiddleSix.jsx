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
    <NavLink to="/secret" onClick={onClose}>
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
        an end to it. Suddenly, you spy a soft light emanating from what must be
        the end of the passageway.
      </p>
      <p className="modal__text">
        You come to an illuminated, amber-colored inscription on the wall,
        beside which stands a heavy, oak door. You notice the inscription is
        incomplete with five empty slots where you think runes might fit. The
        inscription reads thus:
      </p>
      <div className="modal__content">
        <p className="modal__text modal__text_italic">
          My home is within, and I always go out,
        </p>
        <p className="modal__text modal__text_italic">
          Sometimes freely, sometimes withheld.
        </p>
        <p className="modal__text modal__text_italic">
          I am often followed by others,
        </p>
        <p className="modal__text modal__text_italic">
          And I follow others often.
        </p>
        <p className="modal__text modal__text_italic">
          I brighten up each room I am in.
        </p>
        <p className="modal__text modal__text_italic">
          I can draw large crowds around me.
        </p>
        <p className="modal__text modal__text_italic">
          Everyone wants to hear me.
        </p>
        <p className="modal__text modal__text_italic">
          Some have never known me.
        </p>
        <p className="modal__text modal__text_italic">
          I am medicine for those with melancholy.
        </p>
        <p className="modal__text modal__text_italic">
          I am wine for those who weep.
        </p>
        <p className="modal__text modal__text_italic">
          I am balm for those with heartbreak.
        </p>
        <p className="modal__text modal__text_italic">What am I? A...</p>
      </div>
      <div className="modal__input-container">
        <input
          className="modal__input modal__input_otp"
          type="text"
          id="riddle-six-one"
          name="riddle-six-one"
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
          id="riddle-six-two"
          name="riddle-six-two"
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
          id="riddle-six-three"
          name="riddle-six-three"
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
          id="riddle-six-four"
          name="riddle-six-four"
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
          id="riddle-six-five"
          name="riddle-six-five"
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
