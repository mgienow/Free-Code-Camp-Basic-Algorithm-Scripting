/*Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

TEST CASES:
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false.
*/

function palindrome(str) {
  // render str as all lower case:
  str=str.toLowerCase();

// remove special characters, leaving only alphanumeric chars, with regex:
/*The regex explained:
[]   indicates a number of different characters to be filtered;
^   means all characters EXCEPT the ones defined in the brackets;
0-9 means all numerals;
a-z means all lowercase letters (could also include A-Z as another searc
    parameter, but since we rendered str.toLowerCase() it's not necessary);
+   is there to indicte that if consecutive special chars are present, they
    can be removed at one go instead of one at a time;
g   means global, ie, return all instances not just the first one. 
*/
  var onlyLetters = str.replace(/[^0-9a-z]+/g, '');

//render the string into an array:
  onlyLetters = onlyLetters.split('');

//establish a new var and assign it the value of the str array, reversed:
  var emordnilap = onlyLetters.reverse();

//turn the reversed array back into a string:
emordnilap=emordnilap.join('');

//turn the original array back into a string:
var palindrome = onlyLetters.reverse().join('');

//test for equality between the original string and the reversed string:
if(palindrome === emordnilap){
  return true;
} else {
return false;
}
}

/*The one thing I don't understand going away from this exercise is why onlyLetters
gets reversed, when I'm assigning a new variable (emordinlap). So in turning
the array from the original `str` back into a string, it also needs to be reversed
again so it appears in the original order. */
