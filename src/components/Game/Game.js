import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function submitGuess(input) {
    console.log({ guess: input });
    // Add guess to list
    const newGuess = { id: Math.random(), input: input };
    const guessesArr = [...guesses, newGuess];
    setGuesses(guessesArr);
  }
  console.log(guesses);
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
