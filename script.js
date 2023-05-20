const img = document.querySelector("img");

function getImage(searchTerm) {
  fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=8PltmVYYZ2B7WBUvMceFkHZTT2dC0jsq&s=" + searchTerm,
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
}
const button = document.querySelector("button")

getImage()
button.addEventListener("click", getImage)

// search
const searchInput = document.querySelector("input")
const searchButton = document.querySelector(".search")

searchButton.addEventListener("click", search)

function search() {
  const search = searchInput.value
  getImage(search)
}