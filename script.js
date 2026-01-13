
let hands = "A 2 3 4 5 6 7 8 9 10 J Q K";
hands = hands.split(" ")

const firstCardValue = document.getElementById("first-card-value")
const secondCardValue = document.getElementById("second-card-value")

firstCardValue.textContent = hands[Math.floor(Math.random() * hands.length)];
secondCardValue.textContent = hands[Math.floor(Math.random() * hands.length)];
//-----------------------------------------------------------------------

const suits = ['❤️', '♣️', '♦️', '♠️']
let firstCardSuits = document.querySelectorAll(".first-card-suit")
let secondCardSuits = document.querySelectorAll(".second-card-suit")

const randomFirstSuit = suits[Math.floor(Math.random() * suits.length)];
const randomSecondSuit = suits[Math.floor(Math.random() * suits.length)];

firstCardSuits.forEach(element => element.textContent = randomFirstSuit);
secondCardSuits.forEach(element => element.textContent = randomSecondSuit);
//-------------------------------------------------------------------------------------------

//Calculate and display win percentage
const handNotation = getHandNotation(
  firstCardValue.textContent,
  randomFirstSuit,
  secondCardValue.textContent,
  randomSecondSuit
);

// winPercentage should produce value from object headsUpStrengths which are precaluclated percentage values OR just 50.0 as a dummy value?
const winPercentage = headsUpStrengths[handNotation] || 50.0;
document.getElementById("win-percentage").textContent = winPercentage.toFixed(1) + "%"; 
/*
  .toFixed(1) rounds a number to 1 decimal place and converts it to a string.

  Examples:

  let num = 67.0;
  num.toFixed(1);  // Returns "67.0"

  let num2 = 85.3456;
  num2.toFixed(1);  // Returns "85.3" (rounded)

  let num3 = 82.47;
  num3.toFixed(1);  // Returns "82.5" (rounded up)

  let num4 = 50;
  num4.toFixed(1);  // Returns "50.0"

*/
//------------------------------------------------------------------------------------

document.getElementById("deal").addEventListener("click", () => {
  window.location.reload();
});
//-------------------------------------------------------------------------------------------




