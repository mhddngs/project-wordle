import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {
  const allowedGuesses = NUM_OF_GUESSES_ALLOWED;

  return (
    <div className="guess-results">
      {range(0, allowedGuesses, 1).map((guessIndex) => {
        return <Guess key={guessIndex} guess={guesses[guessIndex]?.guess} />;
      })}
    </div>
  );
}

export default GuessResults;
