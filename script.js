const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=8PltmVYYZ2B7WBUvMceFkHZTT2dC0jsq&s=the_office",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
