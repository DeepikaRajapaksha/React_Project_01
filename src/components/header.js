import React from 'react'
import "..//CSS/header.css"
export default function header() {
  return (
    <header>
        <nav className="navbar">
            <div className="logo">WeatherSync</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#forecast">Forecast</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
