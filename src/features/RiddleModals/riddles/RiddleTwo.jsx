import RiddleModal from "../RiddleModal.jsx";

import { useState } from "react";

function RiddleTwo({ isOpen, onClose }) {
  const [answer, setAnswer] = useState("");

  const answerTwo = "Mellon";
  const clueTwo = "A";
  const title = "The Doors of Durin";
  const onYes = "The doors open.";
  const onNo = "What is the Elven word for friend?";

  const isCorrect = answer.toLowerCase() === answerTwo.toLowerCase();

  return (
    <RiddleModal
      name="riddle-two"
      title={title}
      onClose={onClose}
      isOpen={isOpen}
      onYes={onYes}
      onNo={onNo}
      isCorrect={isCorrect}
      clue={clueTwo}
    >
      <p className="modal__text">
        Above the mountain peaks and treetops, the sky is as black as pitch,
        save for a sliver of the moon and the gleaming stars reeling overhead.
        Stumbling your way through the dark, you find a murmuring stream that
        leads you along an old path. At length, you see a shimmering door,
        glowing like starlight. An elven inscription can be read upon its arch:
      </p>
      <div className="modal__content">
        <p className="modal__text modal__text_italic">
          Ennyn Durin Aran Moria. Pedo Mellon a Minno. Im Narvi hain echant.
          Celebrimbor o Eregion teithant i thiw hin.
        </p>
        <p className="modal__text modal__text_italic">
          The Doors of Durin, Lord of Moria. Speak, friend, and enter. I, Narvi,
          made them. Celebrimbor of Hollin drew these signs.
        </p>
      </div>
      <input
        className="modal__input"
        type="text"
        id="riddle-two"
        name="riddle-two"
        placeholder="What is the password?"
        minLength="1"
        maxLength="30"
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      />
    </RiddleModal>
  );
}

export default RiddleTwo;
