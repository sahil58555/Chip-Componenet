import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Chip from "../Chip/Chip";
import { filterAlreadyUsedNames, deleteItem } from "../../utils/filter";
import { dummySuggestions } from "../../utils/getDummySuggestions";

import "./Chips.css";
import Suggestions from "../Suggestions/Suggestions";
const defaultrange = { start: 0, end: 4 };

function Chips() {
  const [items, setItems] = useState([]);
  const [suggestions, setSuggestions] = useState(dummySuggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusOnLastElement, setFocusOnLastElement] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [range, setRange] = useState(defaultrange);

  const deleteItemAndUpdateSuggestions = (id) => {
    const updatedItems = deleteItem(items, id);

    setSuggestions(filterAlreadyUsedNames(updatedItems));

    setItems(updatedItems);
    setSelectedIndex(-1);
    setRange(defaultrange);
  };

  const handleSuggestionClick = (suggestion) => {
    const { name, image } = suggestion;
    const item = {
      id: uuidv4(),
      name,
      image,
    };

    setNewItemName("");
    setItems([...items, item]);

    setSuggestions(filterAlreadyUsedNames([...items, item]));

    if (focusOnLastElement) {
      setFocusOnLastElement(false);
    }

    setSelectedIndex(-1);
    setRange(defaultrange);
  };

  return (
    <div>
      <div className="container">
        <Chip
          items={items}
          setItems={setItems}
          deleteItem={deleteItemAndUpdateSuggestions}
          setShowSuggestions={setShowSuggestions}
          setSuggestions={setSuggestions}
          focusOnLastElement={focusOnLastElement}
          setFocusOnLastElement={setFocusOnLastElement}
          newItemName={newItemName}
          setNewItemName={setNewItemName}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          suggestions={suggestions}
          range={range}
          setRange={setRange}
          handleSuggestionClick={handleSuggestionClick}
        />
      </div>
      {showSuggestions && (
        <Suggestions
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
          showSuggestions={showSuggestions}
          selectedIndex={selectedIndex}
          range={range}
          setSelectedIndex={setSelectedIndex}
        />
      )}
    </div>
  );
}

export default Chips;
