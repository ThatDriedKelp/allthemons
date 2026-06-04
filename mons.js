function getRandomImageUrl() {
  const width = 500;
  const height = 500;
  return `mons/${width}/${height}?random=${Math.random()}`;
}

function generateImages() {
  const imagesContainer = document.getElementById("images");
  imagesContainer.innerHTML = "";

    const img = document.createElement("img");
    img.src = getRandomImageUrl();
    imagesContainer.appendChild(img);

}

document
  .getElementById("generate-btn")
  .addEventListener("click", generateImages);

// Generate initial set of images on page load
generateImages();
