import React, { useEffect, useRef } from "react";
import "./Suggestions.css";

export default function Suggestions({
  suggestions,
  handleSuggestionClick,
  selectedIndex,
  range,
  setSelectedIndex,
}) {
  const { start, end } = range;

  const getClassName = (index) => {
    let className = "list-item";

    if (selectedIndex == index) {
      className += " highlight-list";
    }

    return className;
  };

  const handleMouseEnter = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="suggestions-container" id="list-container">
      {
        <ul className="suggestions-list" id="list-items">
          {suggestions.map((suggestion, index) => {
            //if(index < start || index > end) return;

            return (
              <li
                key={suggestion.name}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <div className={getClassName(index)}>
                  <img src={suggestion.image} alt="icon" />
                  <h3>{suggestion.name}</h3>
                  <h3 className="darkgray">{suggestion.email}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
