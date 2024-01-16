import React, { useEffect, useRef } from "react";
import "./Suggestions.css";

export default function Suggestions({
  suggestions,
  handleSuggestionClick,
  selectedIndex,
  range,
}) {
  const { start, end } = range;

  const getClassName = (index) => {
    let className = "list-item";

    if (selectedIndex == index) {
      className += " highlight-list";
    }

    return className;
  };
  return (
    <div className="suggestions-container">
      {
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => {
            if(index < start || index > end) return;
            
            return (<li
              key={suggestion.name}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <div className={getClassName(index)}>
                <img src={suggestion.image} alt="icon" />
                <h3>{suggestion.name}</h3>
                <h3 className="darkgray">{suggestion.email}</h3>
              </div>
            </li>)
          })}
        </ul>
      }
    </div>
  );
}
