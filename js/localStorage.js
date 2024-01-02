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

const buttonOne = $("#pastOne");
const buttonTwo = $("#pastTwo");
const buttonThree = $("#pastThree");

const pastTitle = $("#pastTitle");
const pastInstructions = $("#pastInstructions");
const pastGif = $("#pastGif");

buttonOne.on("click", function (event) {
  savedExerciseTitle = localStorage.getItem("savedExerciseTitle")
    ? JSON.parse(localStorage.getItem("savedExerciseTitle"))
    : [];
  savedExerciseInstructions = localStorage.getItem("savedExerciseInstructions")
    ? JSON.parse(localStorage.getItem("savedExerciseInstructions"))
    : [];
  savedExerciseGif = localStorage.getItem("savedExerciseGif")
    ? JSON.parse(localStorage.getItem("savedExerciseGif"))
    : [];

  pastTitle.text(capitalizeFirstLetter(savedExerciseTitle[3]));

  pastInstructions.empty();
  //create a new list with intructions
  for (a = 0; a < savedExerciseInstructions[3].length; a++) {
    var instruction = savedExerciseInstructions[3][a];
    var instr = $("<li>");
    instr.text(instruction);
    pastInstructions.append(instr);
  }

  pastGif.attr("src", savedExerciseGif[3]);
});

buttonTwo.on("click", function (event) {
  pastTitleOne.text(capitalizeFirstLetter(savedExerciseTitle[3]));
  pastTitleTwo.text(capitalizeFirstLetter(savedExerciseTitle[4]));
  pastTitleThree.text(capitalizeFirstLetter(savedExerciseTitle[5]));
  pastTitle.text(capitalizeFirstLetter(savedExerciseTitle[4]));

  pastInstructions.empty();
  //create a new list with intructions
  for (a = 0; a < savedExerciseInstructions[4].length; a++) {
    var instruction = savedExerciseInstructions[4][a];
    var instr = $("<li>");
    instr.text(instruction);
    pastInstructions.append(instr);
  }

  pastGif.attr("src", savedExerciseGif[4]);
});

buttonThree.on("click", function (event) {
  pastTitle.text(capitalizeFirstLetter(savedExerciseTitle[5]));

  pastInstructions.empty();
  //create a new list with intructions
  for (a = 0; a < savedExerciseInstructions[5].length; a++) {
    var instruction = savedExerciseInstructions[5][a];
    var instr = $("<li>");
    instr.text(instruction);
    pastInstructions.append(instr);
  }

  pastGif.attr("src", savedExerciseGif[5]);
});
