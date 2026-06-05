const img = document.getElementById("poke");
const btn = document.getElementById("generate-btn");

let count = 0;

const counterDisplay = document.createElement("p");
counterDisplay.id = "counter";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

document.body.insertBefore(counterDisplay, btn);
document.body.insertBefore(resetBtn, btn);

function updateCounter() {
  counterDisplay.textContent = `Count: ${count}`;
}

function generate() {
  const index = Math.floor(Math.random() * images.length);
  img.src = images[index];

  count++;
  updateCounter();
}

function resetCount() {
  count = 0;
  updateCounter();
}

btn.addEventListener("click", generate);
resetBtn.addEventListener("click", resetCount);

generate();
