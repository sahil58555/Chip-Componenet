import React, { useState, useRef } from "react";
import "./Chip.css";
import {
  filteredSuggestions,
  filterAlreadyUsedNames,
} from "../../utils/filter";

function Chip({
  items,
  deleteItem,
  setShowSuggestions,
  setSuggestions,
  setFocusOnLastElement,
  focusOnLastElement,
  newItemName,
  setNewItemName,
  setItems,
  setSelectedIndex,
  selectedIndex,
  suggestions,
  range,
  setRange,
  handleSuggestionClick,
}) {
  const inputRef = useRef(null);

  const getClassName = (isLastIndex) => {
    let className = "item-container";

    if (isLastIndex && focusOnLastElement) {
      className += " highlighted";
    }

    return className;
  };

  const handleBlur = () => {
    inputRef.current.focus();
  };

  const handleFocusOnLastElement = () => {
    if (focusOnLastElement) {
      setItems(items.slice(0, -1));
      setFocusOnLastElement(false);

      setSuggestions(filterAlreadyUsedNames(items.slice(0, -1)));
      setSelectedIndex(-1);
    } else {
      setFocusOnLastElement(true);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (focusOnLastElement) {
      setFocusOnLastElement(false);
    }

    setNewItemName(inputValue);
    setSuggestions(filteredSuggestions(items, inputValue));
    setShowSuggestions(true);
    setSelectedIndex(-1);
  };

  const handleKeyCapture = (e) => {
    if (e.key === "ArrowUp") {
      if (selectedIndex == range.start && selectedIndex != 0) {
        setRange({ start: range.start - 1, end: range.end - 1 });
      }
      if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
    } else if (e.key === "ArrowDown") {
      if (
        selectedIndex == range.end &&
        selectedIndex != suggestions.length - 1
      ) {
        setRange({ start: range.start + 1, end: range.end + 1 });
      }
      if (selectedIndex + 1 < suggestions.length)
        setSelectedIndex(selectedIndex + 1);
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0) handleSuggestionClick(suggestions[selectedIndex]);
      setSelectedIndex(-1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      handleFocusOnLastElement();
    }
  };

  return (
    <div className="chip-container">
      {items.map((item, index) => {
        return (
          <div
            className={getClassName(index === items.length - 1)}
            key={item.id}
          >
            <h1>
              <img src={item.image} alt="icon" />
            </h1>
            <h1>{item.name}</h1>
            <h1 className="delete-icon" onClick={() => deleteItem(item.id)}>
              X
            </h1>
          </div>
        );
      })}
      <div style={{ height: "103.88px" }}>
        <input
          type="text"
          placeholder="Add new user....."
          className="input-list"
          value={newItemName}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onKeyUpCapture={handleKeyCapture}
          onKeyDown={handleKeyDown} 
          onBlur={handleBlur}
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default Chip;
