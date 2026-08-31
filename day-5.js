let button = document.getElementById("report-button");
let report = document.getElementById("report");

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}

button.addEventListener("click", function () {
  let lines = pets.map(summarize);
  report.textContent = lines.join("\n");
});