/* Un alert espone 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l’utente
deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati
inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/

// the numbers to memorize are generated
var randomNumsCollection = [];
for (var i = 0; i < 5; ++i)
{
    randomNumsCollection.push(getRandomInt(1, 100));
}
alert("The random numbers you have to memorize are: " + randomNumsCollection.join(", "));

// 30 seconds countdown
var countdown = setInterval(countdown, 1000);
var counter = 30;
function countdown()
{
    console.log(counter--);
    if (counter === 0) clearInterval(countdown);
}

// the user is asked to enter the numbers
alert("Now you can enter the 5 numbers");
for (i = 0; i < 5; ++i)
{
    prompt("Enter a number: ");
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
