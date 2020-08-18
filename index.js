// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * In counter1 the variable is within the scope of the function, in counter2 it is global. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses closure. I can tell because the variable count falls down into the function within.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be preferable when we need to nest together more than one function, or need to call upon them as a group elsewhere in our code.
 * counter2 would be preferable in a situation that we might need to call upon the count variable elsewhere in the code.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
let points;

function inning(){
  points = Math.floor((Math.random() * 3) + 1);
  return points;
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
let teamScores = {
  home: 0,
  away: 0
}

function finalScore(inning, num){
  for (i = 0; i < num; i++){
  teamScores.home = teamScores.home + inning();
  teamScores.away = teamScores.away + inning();
}
  return teamScores
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

let inningScore = {
  away: 0,
  home: 0
}

let totals = {
  away: 0,
  home: 0
}

function getInningScore(inning){
  inningScore.home =  inning();
  inningScore.away =  inning();
  return inningScore;
}

function scoreboard(innNum) {
  for(i = 0; i < innNum; i++){
    getInningScore(inning);
    totals.home = totals.home + inning();
    totals.away = totals.away + inning();
    console.log(`Inning ${i + 1}: ${inningScore.away} - ${inningScore.home}`);
  }
  console.log(`Final Score: ${totals.away} - ${totals.home}`);
}
scoreboard(9);