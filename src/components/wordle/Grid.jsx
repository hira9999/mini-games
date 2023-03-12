import React from 'react'
import Row from './Row'

export const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <div className="grid">
      <div>
        {guesses.map((guess, i) => {
          if (turn === i) {
            return <Row currentGuess={currentGuess} key={i} />
          }
          return <Row guess={guess} key={i} />
        })}
      </div>
    </div>
  )
}
