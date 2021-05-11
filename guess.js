/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */
var inMin,intMax,intGuess,intRandom,intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin = parseInt(prompt("Choose the lowest number(but no lower than 0) in your guessing range"));
while(isNaN(intMin)||intMin<0){
  intMin = parseInt(prompt("Invalid entery. Pleas enter a number greater or equal to 0 for your minimum number"));
}

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
intMax = parseInt(prompt("Choose the highest number in your guessing range but the number must be at least more than " + (intMin +2)));
while(isNaN(intMax)||intMax<(inMin + 2)){
  intMax = parseInt(prompt("Sorry, you need to enter a number greater or equal to " + (intMin + 2) + " for your maxomum number"));
}

intGuess = parseInt(prompt("Please enter a number between " + intMin + " and " + intMax));
while(isNaN(intGuess)||intGuess<intMin||intGuess>intMax){
  intGuess = parseInt(prompt("Sorry, you need to choose a number between " + intMin + " and " + intMax));
}

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);

// set the loop counter
intCount = 1;

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
 * The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
while(intGuess!= intRandom){
    if(intGuess<intRandom){
        intGuess=parseInt(prompt("Your guess of " + intGuess + " is too low. Please guess again"));
        while(isNaN(intGuess)||intGuess<intMin||intGuess>intMax){
            intGuess = parseInt(prompt("Sorry, you need to choose a number between " + intMin + " and" +intMax));
        }
    }else {
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too high. Please guess again"));
         while(isNaN(intGuess)||intGuess<intMin||intGuess>intMax){
            intGuess = parseInt(prompt("Sorry, you need to choose a number between " + intMin + " and" +intMax));
         }
    }
    intCount++;
}

// provides final output upon successful guessing
alert("Congratulation!!! You guessed the random number of " +intRandom +" and it only took you " +intCount +" attempts!");