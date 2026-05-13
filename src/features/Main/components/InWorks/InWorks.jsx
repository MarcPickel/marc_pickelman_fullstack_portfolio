import "./InWorks.css";
import Inkwell from "../Inkwell/Inkwell.jsx";

import elephant from "../../../../assets/postgresql_elephant.png";
import ts from "../../../../assets/Typescript.svg.png";
import prisma from "../../../../assets/prisma-logo.png";

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
        <div className="in-works__label">
          <img className="in-works__image" src={elephant} />
          <div className="in-works__column">
            <p className="in-works__text">Learning:</p>
            <p className="in-works__text in-works__text_italics">PostgreSQL</p>
          </div>
        </div>
      </div>
      <div className="in-works__container">
        <Inkwell color="blue" />
        <div className="in-works__label">
          <img className="in-works__image" src={ts} />
          <div className="in-works__column">
            <p className="in-works__text">Learning:</p>
            <p className="in-works__text in-works__text_italics">TypeScript</p>
          </div>
        </div>
      </div>
      <div className="in-works__container">
        <Inkwell color="red" />
        <div className="in-works__label">
          <img className="in-works__image" src={prisma} />
          <div className="in-works__column">
            <p className="in-works__text">Learning:</p>
            <p className="in-works__text in-works__text_italics">Prisma ORM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InWorks;
