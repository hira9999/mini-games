import { useEffect, useState } from 'react'
import Card from '../components/memory/Card'
import '../styles/memory.css'

function Memory() {
  const items = [
    { item: 'helmet', matched: false },
    { item: 'ring', matched: false },
    { item: 'shield', matched: false },
    { item: 'scroll', matched: false },
    { item: 'potion', matched: false },
    { item: 'sword', matched: false },
  ]
  const [cards, setCards] = useState([])
  const [firstPick, setFirstPick] = useState('')
  const [secondPick, setSecondPick] = useState('')

  const suffleCards = () => {
    let suffled = [...items, ...items]
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, id: Math.random() }
      })
    setCards(suffled)
  }

  const handleClick = (card) => {
    firstPick ? setSecondPick(card) : setFirstPick(card)
  }

  useEffect(() => {
    if (firstPick && secondPick && firstPick !== secondPick) {
      if (firstPick.item === secondPick.item) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.item === firstPick.item) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 500)
      }
    }
  }, [firstPick, secondPick, setCards, cards])

  const resetTurn = () => {
    setFirstPick(null)
    setSecondPick(null)
  }

  return (
    <div className="App-module_memory">
      <button className="Button-suffle" onClick={() => suffleCards()}>
        Shuffle Cards!
      </button>
      <div className="Cards">
        {cards.map((card, i) => {
          return (
            <Card
              key={i}
              card={card}
              handleClick={handleClick}
              flipped={
                card === firstPick || card === secondPick || card.matched
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default Memory
