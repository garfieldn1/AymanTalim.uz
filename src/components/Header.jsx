import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          AYMAN <span>TA'LIM</span>
          <small>o'quv markazi · Namangan</small>
        </NavLink>
        <ul className={`navlinks ${open ? 'show' : ''}`}>
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Bosh sahifa</NavLink></li>
          <li><NavLink to="/kurslar" className={({ isActive }) => (isActive ? 'active' : '')}>Kurslar</NavLink></li>
          <li><NavLink to="/biz-haqimizda" className={({ isActive }) => (isActive ? 'active' : '')}>Biz haqimizda</NavLink></li>
          <li><NavLink to="/aloqa" className={({ isActive }) => (isActive ? 'active' : '')}>Aloqa</NavLink></li>
        </ul>
        <div className="navcta">
          <NavLink to="/aloqa" className="btn btn-navy">Bepul sinov darsi</NavLink>
        </div>
        <button className="burger" onClick={() => setOpen(!open)}>&#9776;</button>
      </nav>
    </header>
  )
}
