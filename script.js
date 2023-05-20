const img = document.querySelector("img");

function getImage(searchTerm) {
  fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=8PltmVYYZ2B7WBUvMceFkHZTT2dC0jsq&s=" + searchTerm,
  { mode: "cors" }
)
  .then(function (response) {
    console.log("https://api.giphy.com/v1/gifs/translate?api_key=8PltmVYYZ2B7WBUvMceFkHZTT2dC0jsq&s=" + searchTerm);
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  })
  .catch(function () {
    if (searchTerm === "") {
      getImage("404")
    }
  })
}
const button = document.querySelector(".new")

getImage()
button.addEventListener("click", getImage)

// search
const searchInput = document.querySelector("input")
const searchButton = document.querySelector(".search")

searchButton.addEventListener("click", search)

function search(event) {
  event.preventDefault();
  const search = searchInput.value
  getImage(search)
}