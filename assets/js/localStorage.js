const pastExerciseSlider = $("#pastExerciseSlider");

let savedExerciseTitle = localStorage.getItem("savedExerciseTitle")
  ? JSON.parse(localStorage.getItem("savedExerciseTitle"))
  : [];
let savedExerciseInstructions = localStorage.getItem(
  "savedExerciseInstructions"
)
  ? JSON.parse(localStorage.getItem("savedExerciseInstructions"))
  : [];
let savedExerciseGif = localStorage.getItem("savedExerciseGif")
  ? JSON.parse(localStorage.getItem("savedExerciseGif"))
  : [];

while (savedExerciseTitle.length > 6) {
  savedExerciseTitle.pop();
  savedExerciseInstructions.pop();
  savedExerciseGif.pop();
}

localStorage.setItem("savedExerciseTitle", JSON.stringify(savedExerciseTitle));
localStorage.setItem(
  "savedExerciseInstructions",
  JSON.stringify(savedExerciseInstructions)
);
localStorage.setItem("savedExerciseGif", JSON.stringify(savedExerciseGif));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const pastTitleOne = $("#pastTitleOne");
const pastTitleTwo = $("#pastTitleTwo");
const pastTitleThree = $("#pastTitleThree");

pastTitleOne.text(capitalizeFirstLetter(savedExerciseTitle[0]));
pastTitleTwo.text(capitalizeFirstLetter(savedExerciseTitle[1]));
pastTitleThree.text(capitalizeFirstLetter(savedExerciseTitle[2]));

const buttonOne = $("#pastOne");
const buttonTwo = $("#pastTwo");
const buttonThree = $("#pastThree");

const pastTitle = $("#pastTitle");
const pastInstructions = $("#pastInstructions");
const pastGif = $("#pastGif");
buttonOne.on("click", function (event) {
  pastTitle.text(capitalizeFirstLetter(savedExerciseTitle[0]));

  pastInstructions.empty();
  //create a new list with intructions
  for (a = 0; a < savedExerciseInstructions[0].length; a++) {
    var instruction = savedExerciseInstructions[0][a];
    var instr = $("<li>");
    instr.text(instruction);
    pastInstructions.append(instr);
  }

  pastGif.attr("src", savedExerciseGif[0]);

  // show past exercise slider
  pastExerciseSlider.removeClass("hidden");
});

buttonTwo.on("click", function (event) {
  pastTitle.text(capitalizeFirstLetter(savedExerciseTitle[1]));

  pastInstructions.empty();
  //create a new list with intructions
  for (a = 0; a < savedExerciseInstructions[1].length; a++) {
    var instruction = savedExerciseInstructions[1][a];
    var instr = $("<li>");
    instr.text(instruction);
    pastInstructions.append(instr);
  }

  pastGif.attr("src", savedExerciseGif[1]);

  // show past exercise slider
  pastExerciseSlider.removeClass("hidden");
});

buttonThree.on("click", function (event) {
  pastTitle.text(capitalizeFirstLetter(savedExerciseTitle[2]));

  pastInstructions.empty();
  //create a new list with intructions
  for (a = 0; a < savedExerciseInstructions[2].length; a++) {
    var instruction = savedExerciseInstructions[2][a];
    var instr = $("<li>");
    instr.text(instruction);
    pastInstructions.append(instr);
  }

  pastGif.attr("src", savedExerciseGif[2]);

  // show past exercise slider
  pastExerciseSlider.removeClass("hidden");
});
