import "./InWorks.css";
import Inkwell from "../Inkwell/Inkwell.jsx";

//import elephant from "../../../../assets/postgresql.jpg";
//import ts from "../../../../assets/Typescript.svg.png";
//import prisma from "../../../../assets/prisma_orm.jpg";

function InWorks() {
  return (
    <div className="in-works">
      {/*
       * Inkwells shall be the containers marking the "In the Works" Section
       * Upon hovering, the cork on the top lifts/pops off
       */}
      <div className="in-works__container">
        <Inkwell color="green" />
        <p className="in-works__text">Learning:</p>
        <p className="in-works__text">PostgreSQL</p>
      </div>
      <div className="in-works__container">
        <Inkwell color="blue" />
        <p className="in-works__text">Learning:</p>
        <p className="in-works__text">PostgreSQL</p>
      </div>
      <div className="in-works__container">
        <Inkwell color="red" />
        <p className="in-works__text">Learning:</p>
        <p className="in-works__text">PostgreSQL</p>
      </div>
    </div>
  );
}

export default InWorks;
