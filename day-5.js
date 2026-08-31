let cardList = document.getElementById("card-list");

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}

let cards = pets.map(function (pet) {
  return '<article class="card"><h3>' + pet.name + '</h3><p>' + summarize(pet) + '</p></article>';
});

cardList.innerHTML = cards.join("");