import RiddleModal from "../RiddleModal.jsx";

import { useState } from "react";

function RiddleFour({ isOpen, onClose }) {
  const [answer, setAnswer] = useState("");

  const answerFour = "Time";
  const clueFour = "G";
  const title = "Riddles in the Dark";
  const onYes = "We hates it forever!";
  const onNo = "The creature eats you.";

  const isCorrect = answer.toLowerCase() === answerFour.toLowerCase();

  return (
    <RiddleModal
      name="riddle-four"
      title={title}
      onClose={onClose}
      isOpen={isOpen}
      onYes={onYes}
      onNo={onNo}
      isCorrect={isCorrect}
      clue={clueFour}
    >
      <p className="modal__text">
        You rub the bump on your head as you grope around blindly in the dark.
        Hearing the lapping of water, you can guess you are near an underground
        lake.
      </p>
      <p className="modal__text">
        All of a sudden, a hideous creature leaps out from behind a rock and
        crouches before you, its jaws dripping with saliva.
      </p>
      <p className="modal__text">
        "Bless us and splash us, my precioussss! I guess it&apos;s a choice
        feast.
      </p>
      <p className="modal__text">
        "Praps ye sits here and chats with it a bitsy, my preciousss. It likes
        riddles, praps it does, does it?"
      </p>
      <div className="modal__content">
        <p className="modal__text modal__text_italic">
          This thing all things devours:
        </p>
        <p className="modal__text modal__text_italic">
          Birds, beasts, trees, flowers;
        </p>
        <p className="modal__text modal__text_italic">
          Gnaws iron, bites steel;
        </p>
        <p className="modal__text modal__text_italic">
          Grinds hard stones to meal;
        </p>
        <p className="modal__text modal__text_italic">Slays king, ruins town</p>
        <p className="modal__text modal__text_italic">
          And beats high mountain down.
        </p>
      </div>
      <input
        className="modal__input"
        type="text"
        id="riddle-four"
        name="riddle-four"
        placeholder="What is it, my preciousss?"
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      />
    </RiddleModal>
  );
}

export default RiddleFour;
