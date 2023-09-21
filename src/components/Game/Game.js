import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function submitGuess(input) {
    console.log({ guess: input });
    // Add guess to list
    const response = checkGuess(input, answer);
    const newGuess = { id: Math.random(), guess: response };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    if (input === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  console.log(guesses);
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput submitGuess={submitGuess} gameStatus={gameStatus} />
      {gameStatus === "won" ? (
        <Banner status={"success"}>
          <strong>Congratulations!</strong> You got it in{" "}
          <strong>
            {guesses.length < 2 ? "1 guess" : `${guesses.length} guesses`}
          </strong>
        </Banner>
      ) : gameStatus === "lost" ? (
        <Banner status={"error"}>
          Sorry, the correct answer is <strong>{answer}</strong>
        </Banner>
      ) : undefined}
    </>
  );
}

export default Game;
