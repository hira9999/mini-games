import React from 'react'
import '../../styles/memory.css'

const Card = ({ card, handleClick, flipped }) => {
  return (
    <div className="Card-module_card" onClick={() => handleClick(card)}>
      <div className={flipped ? 'Card-module_flipped' : ''}>
        <img
          className="front"
          src={`/memoryItems/${card.item}.png`}
          alt="front"
        />
        <img className="back" src={`/memoryItems/cover.png`} alt="back" />
      </div>
    </div>
  )
}

export default Card
