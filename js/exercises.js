// Set the required variables
const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';
let limit = "?limit=" + 200;

let exerciseName = [];
let exerciseGif = [];
let exerciseInstructions = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd592bd071bmsh0f69b85e08df678p1ff500jsn2bf527f623c7',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

async function getExercises(bodyPart, equipment) {
  let queryURL = url + bodyPart + limit;

  // // Empty the array each call to prevent more than three accumulating
  // exerciseName = [];
  // exerciseGif = [];
  // exerciseInstructions = [];

   try {
    const response = await fetch(queryURL, options);
    const data = await response.json();
    filteredDataResponse(data, equipment)
  } catch (error) {
    console.error(error);
  }
}

// Here we need to filter the array to end up with just 3 random items that match the criteria
function filteredDataResponse(data, equipment) {
  let returnedExercisesArray = [];
  // Start by taking the full array from the fetch data, extract only the items that match the second parameter (equipment), and store those in a new array
  for (let i = 0; i < data.length; i++){
    if (data[i].equipment === equipment) {
      returnedExercisesArray.push(data[i])
    }
  }
  // Before we reduce the array to 3 items we need to randomise it so the user can get different exercises if they generate a new workout.
  let returnedExercises = returnedExercisesArray
      // Map each item of the array to a random number
      .map(value => ({ value, sort: Math.random() }))
      // Sort the array in order using the random assigned map values. Essentially shuffling the array
      .sort((a, b) => a.sort - b.sort)
      // Remove the map values return just the array of objects
      .map(({ value }) => value)
  
  // Repeatedly pop off the last array item until only three are left
  while (returnedExercises.length > 3) {
    returnedExercises.pop();
  }
  
  for (let i = 0; i < returnedExercises.length; i++) {
    exerciseName.push(returnedExercises[i].name);
    exerciseGif.push(returnedExercises[i].gifUrl);
    exerciseInstructions.push(returnedExercises[i].instructions);
  }
}

  // Call the getExercise function passing in two variables.
    // The first variable should contain a string matching one of the bodyPart options
    // The second variable should contain a string matching one of the equipment options
      // let bodyPart = 'cardio'; // This needs to be set to body part user input
      // let equipment = "body weight" // This needs to be set to available equipment user input
      // getExercises(bodyPart, equipment);
      //   console.log(exerciseName);
      //   console.log(exerciseGif);
      //   console.log(exerciseInstructions);

// Parameters for ExerciseDB API
/*  'equipment'
            barbell,
            body weight, = No Equipment
            cable,
            dumbbell,
            kettlebell,
            resistance band,
            weighted,

    'bodyPart'
            back,
            cardio,
            chest,
            lower arms,
            lower legs,
            neck,
            shoulders,
            upper arms,
            upper legs,
            waist        
*/

//4.indoor workout call API 1

//5.outdoot workout ,call function to display generic exercises(running , walking , cycle)+ callories burn API call

//6.display data from indoor workout

//7.display data from outdoor workout