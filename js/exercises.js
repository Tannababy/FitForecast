// Set the required variables
const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';
let limit = "?limit=" + 200;

let exerciseName = [];
let exerciseGif = [];
let exerciseInstructions = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd592bd071bmsh0f69b85e08df678p1ff500jsn2bf527f623c7err',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

async function getExercises(bodyPart, equipment) {
  let queryURL = url + bodyPart + limit;

   try {
    const response = await fetch(queryURL, options);
    const data = await response.json();
    filteredDataResponse(data, equipment)
  } catch (error) {
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
  
  while (returnedExercisesArray.length < 3) {
    let i = Math.floor(Math.random() * 29)
    returnedExercisesArray.push(backUpExercises[i])
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