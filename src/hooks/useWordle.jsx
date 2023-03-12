import { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({})

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((char) => {
      return { key: char, color: 'grey' }
    })
    formattedGuess.forEach((value, index) => {
      if (solutionArray[index] === value.key) {
        value.color = 'green'
        solutionArray[index] = null
      }
    })
    formattedGuess.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        formattedGuess[index].color = 'yellow'
        solutionArray[solutionArray.indexOf(letter.key)] = null
      }
    })
    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    setGuesses((prev) => {
      let newGuesses = [...prev]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory((prev) => {
      return [...prev, currentGuess]
    })

    setTurn((prev) => prev + 1)
    setUsedKeys((prev) => {
      formattedGuess.forEach((value) => {
        const currentColor = prev[value.key]
        if (value.color === 'green') {
          prev[value.key] = 'green'
          return
        }
        if (value.color === 'yellow' && currentColor !== 'green') {
          prev[value.key] = 'yellow'
          return
        }
        if (value.color !== ('green' || 'yellow')) {
          prev[value.key] = 'grey'
          return
        }
      })
      return prev
    })
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      // only add guess if turn is less than 5
      if (turn > 5) {
        alert('you used all turns.')
        return
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        alert('you already enter this word.')
        return
      }
      // check word is 5 chars
      if (currentGuess.length !== 5) {
        alert('word must be 5 chars.')
        return
      }
      const formattedGuess = formatGuess()
      addNewGuess(formattedGuess)
      setCurrentGuess('')
    }
    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key)
      }
    }
  }

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyup,
    history,
    usedKeys,
  }
}

export default useWordle
