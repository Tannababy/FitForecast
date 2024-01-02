// ----- Generate Correct Model On Button Click ---------------------------
const generateWorkoutBTN = $("#generateWorkoutBTN");

//create the event handler to show correct modal view
generateWorkoutBTN.on("click", function () {
  //console.log(isIndoorWorkout());
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

// add the event handler to submit user selections
generateWorkoutIndoor.on("click", function () {
  var indoorMuscleGroup = muscleGroupIndoor.val();
  var indoorEquipment = equipmentIndoor.val();
  //get exercises based on user input
  getExercises(indoorMuscleGroup, indoorEquipment).then(function () {
    // remove placholder text from workout slider
    workoutPlaceholder.addClass("hidden");
    //iterate through exercises, we always have three exercises
    for (i = 0; i < 3; i++) {
      var exerciseTitle = exerciseName[i];
      var exerciseInstruction = exerciseInstructions[i];
      var exerciseImg = exerciseGif[i];
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
    // show the workout slider
    exercisesCarousel.removeClass("hidden");
  });
});

// -----------------------------------------------------------
// Outdoor Workouts
const generateWorkoutOutdoor = $("#generate-workout-outdoor");
const exerciseChoice = $("#exerciseChoice");

const RunningGif = "./images/06851301-Run_Cardio-FIX_360.gif";
const WalkingGif = "./images/36561301-Short-Stride-Run_Cardio_360.gif";
const CyclingGif = "./images/52141301-Riding-Outdoor-Bicycle_Cardio_360.gif";
const WheelchairGif = "./images/wheelchair.gif";


// add the event handler to submit user selections
generateWorkoutOutdoor.on("click", function () {

  workoutPlaceholder.addClass("hidden");

  let exerciseChoiceValue = exerciseChoice.val()
  console.log(exerciseChoiceValue)
  var exerciseImg = WheelchairGif;
  if (exerciseChoiceValue == "running") { 
    j = 0; 
    exerciseImg = RunningGif 
  } else if (exerciseChoiceValue == "walking") { 
    j = 1; 
    exerciseImg = WalkingGif 
  }
  else if (exerciseChoiceValue == "cycling") { 
    j = 2; 
    exerciseImg = CyclingGif 
  }
  else { 
    j = 3; 
    exerciseImg = WheelchairGif 
    
  }

  // Images
  for (let i = 0; i < 3; i++ ) {
    var img = $("#exercise-gif" + i);
    img.attr("src", exerciseImg);
    img.attr("style", "width: 320px")
  }

  exercisesCarousel.removeClass("hidden");
});