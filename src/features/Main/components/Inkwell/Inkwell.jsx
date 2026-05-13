import "./Inkwell.css";

function Inkwell({ color }) {
  return (
    <div className="inkwell">
      <div className="inkwell__cork"></div>
      <div className="inkwell__bottle">
        <div className="inkwell__bottle-top">
          <div
            className={`inkwell__bottle-lip inkwell__bottle_glass_${color}`}
          ></div>
          <div
            className={`inkwell__bottle-neck inkwell__bottle_glass_${color}`}
          ></div>
        </div>
        <div className={`inkwell__bottle-body inkwell__bottle_glass_${color}`}>
          <img className="inkwell__label" src={""} />
        </div>
      </div>
      <div className="inkwell__ink"></div>
    </div>
  );
}

export default Inkwell;
