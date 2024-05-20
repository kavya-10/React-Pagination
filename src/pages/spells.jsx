import React from "react";

const Spells = ({ spell }) => {
  return (
    <div className="card" style={{ maxWidth: "310px" }}>
      <div className="card-body">
        <h5 className="card-title">{spell.spellName}</h5>
        <h5>{spell.description}</h5>
      </div>
    </div>
  );
};

export default Spells;