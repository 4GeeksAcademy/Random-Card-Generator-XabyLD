let selectorHeaderSuit = document.querySelector(".card-header");
let selectorBodyNumber = document.querySelector(".card-body");
let selectorFooterSuit = document.querySelector(".card-footer");
let suit;

const numberSuitRandom = () => {
  let randomSuit = Math.floor(Math.random() * 3);
  let randomNumber = Math.floor(Math.random() * 13 + 1);
  // ♦ ♥ ♠ ♣

  if (randomSuit === 0) {
    suit = "♦";
  } else if (randomSuit === 1) {
    suit = "♥";
  } else if (randomSuit === 2) {
    suit = "♠";
  } else {
    suit = "♣";
  }

  if (randomNumber === 10) {
    randomNumber = "T";
  } else if (randomNumber === 11) {
    randomNumber = "J";
  } else if (randomNumber === 12) {
    randomNumber = "Q";
  } else if (randomNumber === 13) {
    randomNumber = "K";
  } else if (randomNumber === 1) {
    randomNumber = "A";
  }

  selectorHeaderSuit.innerHTML = suit;
  selectorFooterSuit.innerHTML = suit;
  selectorBodyNumber.innerHTML = randomNumber;

  if (suit === "♥") {
    suit.style.backgroundColor = "red";
  }
};

const colorSuit = () => {
  console.log(suit);
  if (selectorHeaderSuit === "♦") {
    selectorHeaderSuit.innerHTML = suit;
    suit.style.backgroundColor = "blue";
  }
};
