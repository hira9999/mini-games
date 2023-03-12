import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const { pathname } = useLocation()
  return (
    <nav className="nav">
      <Link className={pathname == '/wordle' && 'selected'} to="wordle">
        Wordle
      </Link>
      <Link className={pathname == '/memory' && 'selected'} to="memory">
        Memory
      </Link>
    </nav>
  )
}

export default Navigation
