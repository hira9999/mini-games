import React from 'react'

const Keyboard = ({ usedKeys, handleKeyup }) => {
  const keypad = [
    { key: 'q' },
    { key: 'w' },
    { key: 'e' },
    { key: 'r' },
    { key: 't' },
    { key: 'y' },
    { key: 'u' },
    { key: 'i' },
    { key: 'o' },
    { key: 'p' },
  ]

  const keypad2 = [
    { key: 'a' },
    { key: 's' },
    { key: 'd' },
    { key: 'f' },
    { key: 'g' },
    { key: 'h' },
    { key: 'j' },
    { key: 'k' },
    { key: 'l' },
  ]

  const keypad3 = [
    { key: 'Enter' },
    { key: 'z' },
    { key: 'x' },
    { key: 'c' },
    { key: 'v' },
    { key: 'b' },
    { key: 'n' },
    { key: 'm' },
    { key: 'Backspace' },
  ]

  return (
    <div className="Keyboard">
      <div className="Keyboard-row">
        {keypad.map((value) => {
          const color = usedKeys[value.key]
          return (
            <button
              key={value.key}
              type="button"
              className={`Key-module_key${color ? ` Key-module_${color}` : ''}`}
              onClick={() => handleKeyup(value)}
            >
              {value.key}
            </button>
          )
        })}
      </div>

      <div className="Keyboard-row">
        <div className="Key-module_half" />
        {keypad2.map((value) => {
          const color = usedKeys[value.key]
          return (
            <button
              key={value.key}
              type="button"
              className={`Key-module_key${color ? ` Key-module_${color}` : ''}`}
              onClick={() => handleKeyup(value)}
            >
              {value.key}
            </button>
          )
        })}
        <div className="Key-module_half" />
      </div>

      <div className="Keyboard-row">
        {keypad3.map((value, idx) => {
          const color = usedKeys[value.key]
          const enterOrBackspace = idx == 0 || idx == 8
          return (
            <button
              key={value.key}
              type="button"
              className={`Key-module_key${color ? ` Key-module_${color}` : ''}${
                enterOrBackspace ? ' Key-module_oneAndHalf' : ''
              }`}
              onClick={() => handleKeyup(value)}
            >
              {value.key}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Keyboard
