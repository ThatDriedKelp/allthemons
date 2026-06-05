const img = document.getElementById("poke");
const btn = document.getElementById("generate-btn");

function generate() {
  const index = Math.floor(Math.random() * images.length);
  img.src = images[index];
}

btn.addEventListener("click", generate);

generate();
