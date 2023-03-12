import React from "react";

const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    return (
      <div className="row">
        <div>{currentGuess.charAt(0)}</div>
        <div>{currentGuess.charAt(1)}</div>
        <div>{currentGuess.charAt(2)}</div>
        <div>{currentGuess.charAt(3)}</div>
        <div>{currentGuess.charAt(4)}</div>
      </div>
    );
  }

  //   initial render
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
