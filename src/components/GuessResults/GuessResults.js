import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  const allowedGuesses = NUM_OF_GUESSES_ALLOWED;

  function checkLetter(letter, index) {
    const answerArr = Array.from(answer);
    const isSimilar = answerArr.filter((l) => l === letter).length > 0;
    if (letter === answer[index]) {
      console.log(`${letter} is exact`);
      return "correct";
    }
    if (isSimilar) {
      console.log(`${letter} is close`);
      return "misplaced";
    }
    console.log(`${letter} is wrong`);
    return "incorrect";
  }

  return (
    <>
      <div className="guess-results">
        {range(0, allowedGuesses, 1).map((guessIndex) => {
          return (
            <p key={Math.random()} className="guess">
              {range(0, 5, 1).map((letterIndex) => {
                const letter = guesses[guessIndex]?.input[letterIndex];
                let classes;
                if (letter) {
                  classes = checkLetter(letter, letterIndex);
                }
                return (
                  <span key={Math.random()} className={`cell ${classes}`}>
                    {letter}
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default GuessResults;
