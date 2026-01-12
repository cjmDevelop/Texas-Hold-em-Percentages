const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => e.target.className.includes("card")? e.target.classList.toggle("selected") : e.target.closest(".card").classList.toggle("selected"));
});
//-----------------------------------------------------------------------

let hands = "A 2 3 4 5 6 7 8 9 10 J Q K";
hands = hands.split(" ")

const firstCardValue = document.getElementById("first-card-value")
const secondCardValue = document.getElementById("second-card-value")

firstCardValue.textContent = hands[Math.floor(Math.random() * hands.length)];
secondCardValue.textContent = hands[Math.floor(Math.random() * hands.length)];
//-----------------------------------------------------------------------

const suits = ['❤️', '♣️', '♦️', '♠️']
let firstCardSuit = document.getElementById("first-card-suit")
let secondCardSuit = document.getElementById("second-card-suit");
firstCardSuit.textContent = suits[Math.floor(Math.random() * suits.length)];
secondCardSuit.textContent = suits[Math.floor(Math.random() * suits.length)];

document.getElementById("deal").addEventListener("click", () => {
  window.location.reload();
});
