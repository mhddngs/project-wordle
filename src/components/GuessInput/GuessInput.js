import React, { useState } from "react";

function GuessInput({ submitGuess }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    submitGuess(input.toUpperCase());
    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default GuessInput;
