let selectorHeaderSuit = document.querySelector(".card-header");
let selectorBodyNumber = document.querySelector(".card-body");
let selectorFooterSuit = document.querySelector(".card-footer");
let suit;

const insertarP = () => {
  const myP = document.createElement("p");
  myP.innerText = "Hola";
  document.getElementsByClassName("card-header").appendChild(myP);
};

const numberSuitRandom = () => {
  let randomSuit = Math.floor(Math.random() * 4);

  // ♦ ♥ ♠ ♣
  if (randomSuit === 0) {
    suit = "♦";
    selectorHeaderSuit.style.color = "blue";
    selectorFooterSuit.style.color = "blue";
  } else if (randomSuit === 1) {
    suit = "♥";
    selectorHeaderSuit.style.color = "red";
    selectorFooterSuit.style.color = "red";
  } else if (randomSuit === 2) {
    suit = "♣";
    selectorHeaderSuit.style.color = "green";
    selectorFooterSuit.style.color = "green";
  } else {
    suit = "♠";
    selectorHeaderSuit.style.color = "black";
    selectorFooterSuit.style.color = "black";
  }

  let randomNumber = Math.floor(Math.random() * 13 + 1);

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
};

const anotherCard = () => {
  let selectedButton = document
    .querySelector("#buttonCharge")
    .addEventListener("click", function() {
      numberSuitRandom();
    });
};
