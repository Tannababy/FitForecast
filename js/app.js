// ----- Generate Correct Model On Button Click ---------------------------
const generateWorkoutBTN = $('#generateWorkoutBTN');

generateWorkoutBTN.on('click', function () {
    console.log(isIndoorWorkout());

    if (isIndoorWorkout()) {
        generateWorkoutBTN.attr("data-target", "#modalWet");
    } else {
        generateWorkoutBTN.attr("data-target", "#modalDry");
    }
})
// ------------------------------------------------------------------------

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//1. Get elements from HTML
const muscleGroupIndoor=$('#muscle-group-indoor');
const equipmentIndoor=$('#equipment-indoor');
const generateWorkoutIndoor= $('#generate-workout-indoor');
generateWorkoutIndoor.on('click', function(){
   var indoorMuscleGroup=muscleGroupIndoor.val();
   var indoorEquipment=equipmentIndoor.val();

    getExercises(indoorMuscleGroup,indoorEquipment)
    .then(function(){
      console.log(exerciseName);
    console.log(exerciseGif);
    console.log(exerciseInstructions);
    for(i=1; i<=3; i++){
        var exerciseTitle=exerciseName[i];
        var exerciseInstruction=exerciseInstructions[i];
        var exerciseImg=exerciseGif[i];
        var title=$('#exercise-title'+i);
        title.text(capitalizeFirstLetter(exerciseTitle));
        var instructions=$('#exercise-instruction'+i);
        instructions.empty();
        for(a=0; a<exerciseInstruction.length; a++){
            var instruction=exerciseInstruction[a];
            var instr=$('<li>');
            instr.text(instruction);
            instructions.append(instr);
        }
        var img=$('#exercise-gif'+i);
        img.attr('src',exerciseImg);
        img.attr('alt',exerciseTitle+ ' gif');
    }
})
})


//2. Set empty array of objects

//3. If history = true, display array of objects (showPrevWorkout) from history in 'past workouts' section.

//4. Function showPrevWorkout to display max 3 workouts stored in local storage.

//5. Pull today's date and display it - Day.js

//6. Call the getWeather function from weather.js

//7. Event handler for modalBtn to look at weather and display modal depending on the weather - chance of precip - if more than 20% get indoor workout , if less than 20% show outdoor workout

// Call the getExercise function passing in two variables.
// The first variable should contain a string matching one of the bodyPart options
// The second variable should contain a string matching one of the equipment options
let bodyPart = "cardio"; // This needs to be set to body part user input
let equipment = "body weight"; // This needs to be set to available equipment user input

// getExercises(bodyPart, equipment);
// console.log(exerciseName);
// console.log(exerciseGif);
// console.log(exerciseInstructions);

//8. Once exercise is displayed (getExercise), store data to array of objects in local storage
