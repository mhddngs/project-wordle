import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5).map((num) => (
        <span
          key={num}
          className={`cell ${guess ? guess[num].status : undefined}`}
        >
          {guess ? guess[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
