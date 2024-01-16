import { dummySuggestions } from "./getDummySuggestions";

export const filterAlreadyUsedNames = (items) => {
  const allItemsNames = items.map((item) => item.name);
  return dummySuggestions.filter(
    (suggestion) => !allItemsNames.includes(suggestion.name)
  );
};

export const filteredSuggestions = (items, inputValue) => {
  return filterAlreadyUsedNames(items).filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export const deleteItem = (items, id) => {
  return items.filter((item) => item.id !== id);
}
