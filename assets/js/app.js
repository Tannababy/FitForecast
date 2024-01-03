// ----- Generate Correct Model On Button Click ---------------------------
const generateWorkoutBTN = $("#generateWorkoutBTN");

//create the event handler to show correct modal view
generateWorkoutBTN.on("click", function () {
  if (isIndoorWorkout()) {
    generateWorkoutBTN.attr("data-target", "#modalWet");
  } else {
    generateWorkoutBTN.attr("data-target", "#modalDry");
  }
});
// ------------------------------------------------------------------------

// fuction to capitalize the title
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//1. Get elements from HTML
const muscleGroupIndoor = $("#muscle-group-indoor");
const equipmentIndoor = $("#equipment-indoor");
const generateWorkoutIndoor = $("#generate-workout-indoor");
const workoutPlaceholder = $("#customWorkoutPlaceholder");
const exercisesCarousel = $("#customExercisesCarousel");

function saveInLocalStorage(savedExerciseTitle, savedExerciseInstructions, savedExerciseGif) {
  localStorage.setItem(
    "savedExerciseTitle",
    JSON.stringify(savedExerciseTitle)
  );
  localStorage.setItem(
    "savedExerciseInstructions",
    JSON.stringify(savedExerciseInstructions)
  );
  localStorage.setItem(
    "savedExerciseGif",
    JSON.stringify(savedExerciseGif)
  );

}

function populateCurrentWorkouts() {
  //iterate through exercises, we always have three exercises
  for (i = 0; i < 3; i++) {
    var exerciseTitle = exerciseName.pop();
    var exerciseInstruction = exerciseInstructions.pop();
    var exerciseImg = exerciseGif.pop();

    // Add previous exercises to Local Storage
    savedExerciseTitle.push(exerciseTitle);
    savedExerciseInstructions.push(exerciseInstruction);
    savedExerciseGif.push(exerciseImg);
    saveInLocalStorage(savedExerciseTitle, savedExerciseInstructions, savedExerciseGif);

    //set capitalize title
    var title = $("#exercise-title" + i);
    title.text(capitalizeFirstLetter(exerciseTitle));
    var instructions = $("#exercise-instruction" + i);
    //clean up old list
    instructions.empty();
    //create a new list with intructions
    for (a = 0; a < exerciseInstruction.length; a++) {
      var instruction = exerciseInstruction[a];
      var instr = $("<li>");
      instr.text(instruction);
      instructions.append(instr);
    }
    var img = $("#exercise-gif" + i);
    img.attr("src", exerciseImg);
    img.attr("alt", exerciseTitle + " gif");
  }

}

const yourCustomWorkout=$("#your-custom-workout");

//Indoor Workouts
// add the event handler to submit user selections
generateWorkoutIndoor.on("click", function () {
  var indoorMuscleGroup = muscleGroupIndoor.val();
  var indoorEquipment = equipmentIndoor.val();
  //get exercises based on user input
  getExercises(indoorMuscleGroup, indoorEquipment).then(function () {
    // remove placholder text from workout slider
    workoutPlaceholder.addClass("hidden");
    
    populateCurrentWorkouts();

    // show the workout slider
    exercisesCarousel.removeClass("hidden");
    yourCustomWorkout.text('Your Custom Workout');
  });
});

// -----------------------------------------------------------
// Outdoor Workouts
const generateWorkoutOutdoor = $("#generate-workout-outdoor");
const exerciseChoice = $("#exerciseChoice");
const selectTime=$("#selectedTime");


// add the event handler to submit user selections
generateWorkoutOutdoor.on("click", function () {
 let timeSelected=selectTime.val();
  let exerciseChoiceValue = exerciseChoice.val();
  getOutdoorExercises(exerciseChoiceValue)
      // remove placholder text from workout slider
      workoutPlaceholder.addClass("hidden");

      populateCurrentWorkouts();
      // show the workout slider
      exercisesCarousel.removeClass("hidden");
      yourCustomWorkout.text('Your Custom Workout is for '+ timeSelected)
});

