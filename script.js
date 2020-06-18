let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) =>{
if (Math.abs(humanGuess - secretTarget) <= Math.abs(computerGuess - secretTarget)){
  return true;
} else if (Math.abs(humanGuess - secretTarget) > Math.abs(computerGuess - secretTarget)){
  return false;
}
}
const updateScore = (winner) =>{
  if (winner === 'human') {humanScore ++} else if (winner === 'computer') {computerScore ++}
}

const advanceRound = () =>{
  currentRoundNumber += 1
}
// trying out the function
//console.log(compareGuesses(5, 3, 10))
//To do: Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. Not possible to set a number outside this range with the + and = buttons, but it can be done by typing directly in the input field.
