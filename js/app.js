//1. Get elements from HTML

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
getExercises(bodyPart, equipment);
console.log(exerciseName);
console.log(exerciseGif);
console.log(exerciseInstructions);

//8. Once exercise is displayed (getExercise), store data to array of objects in local storage
var nothing = [];
