import React, { useEffect } from 'react'
import useWordle from '../../hooks/useWordle'
import { Grid } from './Grid'
import Keyboard from './Keyboard'

export default function Wordle({ solution }) {
  const {
    currentGuess,
    handleKeyup,
    history,
    isCorrect,
    guesses,
    turn,
    usedKeys,
  } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    isCorrect && alert('Congraturations')
  }, [isCorrect])
  return (
    <>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        isCorrect={isCorrect}
        turn={turn}
      />
      <Keyboard
        history={history}
        guesses={guesses}
        turn={turn}
        handleKeyup={handleKeyup}
        usedKeys={usedKeys}
      />
    </>
  )
}
