const totalImages = 9;

const getRandomImage = () => {
  const randomNumber = Math.floor(Math.random() * (totalImages + 1));
  const image = `icons/icon-${randomNumber}.png`;
  return image;
};
export const dummySuggestions = [
  {
    name: "John",
    image: getRandomImage(),
    email: "john@gmail.com",
  },
  {
    name: "Jane",
    image: getRandomImage(),
    email: "jane@gmail.com",
  },
  {
    name: "Alice",
    image: getRandomImage(),
    email: "alice@gmail.com",
  },
  {
    name: "Bob",
    image: getRandomImage(),
    email: "bob@gmail.com",
  },
  {
    name: "Neha",
    image: getRandomImage(),
    email: "neha@gmail.com",
  },
  {
    name: "Sahil",
    image: getRandomImage(),
    email: "sahil@gmail.com",
  },
  {
    name: "Sohan",
    image: getRandomImage(),
    email: "sohan@gmail.com",
  },
  {
    name: "Mohan",
    image: getRandomImage(),
    email: "mohan@gmail.com",
  },
  {
    name: "Raj",
    image: getRandomImage(),
    email: "raj@gmail.com",
  },
  {
    name: "Ritu",
    image: getRandomImage(),
    email: "ritu@gmail.com",
  },
  {
    name: "Rima",
    image: getRandomImage(),
    email: "rima@gmail.com",
  },
  {
    name: "Rohan",
    image: getRandomImage(),
    email: "rohan@gmail.com",
  },
  {
    name: "Aniket",
    image: getRandomImage(),
    email: "aniket@gmail.com",
  },
  {
    name: "Manvi",
    image: getRandomImage(),
    email: "manvi@gmail.com",
  },
  {
    name: "Arushi",
    image: getRandomImage(),
    email: "arushi@gmail.com",
  },
];
