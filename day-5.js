let cardList = document.getElementById("card-list");

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}

let cards = pets.map(function (pet) {
  return '<article class="card"><h3>' + pet.name + '</h3><p>' + summarize(pet) + '</p></article>';
});

cardList.innerHTML = cards.join("");

let freshButton = document.getElementById("fresh-button");
let fresh = document.getElementById("fresh");

function pictureLine(cat) {
  return cat.width + " by " + cat.height + " — " + cat.url;
}

freshButton.addEventListener("click", function () {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(function (response) {
      return response.json();
    })
    .then(function (cats) {
      fresh.textContent = cats.map(pictureLine).join("\n");
    });
});