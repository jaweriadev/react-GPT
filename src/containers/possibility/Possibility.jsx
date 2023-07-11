import React from "react";
import PossibilityImage from "../../assets/possibility.png";
import "./possibility.css";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt="possibility" />
      </div>
    </div>
  );
};

export default Possibility;
