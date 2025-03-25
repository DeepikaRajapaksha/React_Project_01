import React, { useState } from "react";
import "../Styles/header.css";

export default function Header() {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    console.log("Searching for:", event.target.value);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">WeatherNow</div>
        <div className="Search-Bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search location..."
            value={query}
            onChange={handleSearch}
          />
          <button className="search-button">Search</button>
        </div>
      </nav>
    </header>
  );
}
