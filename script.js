const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => e.target.className.includes("card")? e.target.classList.toggle("selected") : e.target.closest(".card").classList.toggle("selected"));
});

let hands = "A 2 3 4 5 6 7 8 9 10 J Q K";
hands = hands.split(" ")


const firstCard = document.getElementById("first-card")
const secondCard = document.getElementById("second-card")

firstCard.textContent = hands[Math.floor(Math.random() * hands.length)];
secondCard.textContent = hands[Math.floor(Math.random() * hands.length)];

//To do: add number for percentage in UI