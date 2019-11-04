/* Un alert espone 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l’utente
deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati
inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/
// @ts-check
// the numbers to memorize are generated
var randomNums = [];
for (var i = 0; i < 5; ++i)
{
    randomNums.push(getRandomInt(1, 100));
}
alert("The random numbers you have to memorize are: " + randomNums.join(", "));
console.log("random nums:", randomNums);

// 30 seconds countdown
var intervalID = setInterval(countdown, 1000);
var counter = 1;
function countdown()
{
    console.log(counter--);
    if (counter === 0)
    {
        clearInterval(intervalID);

        // the user is asked to enter the numbers
        alert("Now you can enter the 5 numbers");
        var enteredNums = [];
        for (i = 0; i < 5; ++i)
        {
            enteredNums.push(parseInt(prompt("Enter a number: "), 10));
        }
        console.log("Entered nums:", enteredNums);

        // the correct entered numbers are inserted into an array
        var correctNums = [];
        for (i = 0; i < 5; ++i)
        {
            if (randomNums.includes(enteredNums[i])) correctNums.push(enteredNums[i]);
        }

        // the user is told which and how many numbers he or she has correctly remembered
        var str;
        if (correctNums.length === 0) str = "numbers";
        else if (correctNums.length === 1) str = "number";
        else str = "numbers: " + correctNums.join(", ");
        console.log("You've remembered " + correctNums.length + " " + str);
    }
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min if min isn't an integer)
 * and no greater than max (or the next integer lower than max if max isn't an integer).
 * @param {Number} min - The interval's minimum value.
 * @param {Number} max - The interval's maximum value.
 * @returns {Number} A random integer between min (inclusive) and max (inclusive).
 */
// reference: https://stackoverflow.com/a/1527820/12253537
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
