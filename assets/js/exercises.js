// Set the required variables
const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/";
let limit = "?limit=" + 200;

let exerciseName = [];
let exerciseGif = [];
let exerciseInstructions = [];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e5fb04e46cmsh7eff4095bdba1d2p1eed4bjsn3f37861064db",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
  }
};

function randomElement(arr) {
  const length = arr.length;
  const randomNumber = Math.floor(Math.random() * length)
  return arr[randomNumber]
}

async function getExercises(bodyPart, equipment) {
  let queryURL = url + bodyPart + limit;

  try {
    const response = await fetch(queryURL, options);
    const data = await response.json();
    //console.log(data)
    filteredDataResponse(data, equipment);
  } catch (error) {
    console.log(error);
  }
}

// filter the array to end up with just 3 random items that match the criteria
function filteredDataResponse(data, equipment) {
  let returnedExercisesArray = [];
  // Start by taking the full array from the fetch data, extract only the items that match the second parameter (equipment), and store those in a new array
  for (let i = 0; i < data.length; i++) {
    if (data[i].equipment === equipment) {
      returnedExercisesArray.push(data[i]);
    }
  }
  console.log(returnedExercisesArray);
  while (returnedExercisesArray.length < 3) {
    returnedExercisesArray.push(randomElement(backUpExercises));
  }

  // Before we reduce the array to 3 items we need to randomise it so the user can get different exercises if they generate a new workout.
  let returnedExercises = returnedExercisesArray
    // Map each item of the array to a random number
    .map((value) => ({ value, sort: Math.random() }))
    // Sort the array in order using the random assigned map values. Essentially shuffling the array
    .sort((a, b) => a.sort - b.sort)
    // Remove the map values return just the array of objects
    .map(({ value }) => value);

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


function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function getOutdoorExercises(typeOfExercise) {
  for (i = 0; i < outdoorExerciseObjects.length; i++) {
    var exerciseGroup = outdoorExerciseObjects[i];
    var type = exerciseGroup[0].trim().toLowerCase();
    var allExercises = exerciseGroup[1];
    if (type == typeOfExercise.toLowerCase()) {
      for (a = 0; a < 3; a++) {
        var oneExercise = randomElement(allExercises);
        exerciseName.push(oneExercise.Name);
        exerciseGif.push(oneExercise.GifUrl);
        exerciseInstructions.push(oneExercise.Instructions);
      }
    }
  }
}
