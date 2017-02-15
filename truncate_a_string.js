/* Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".

*/


function truncateString(str, num) {
  // Clear out that junk in your trunk
/* Since slice(num) returns the characters removed from a string, starting
at position `num` we need to specify
"start at index position 0 and cut `num` number of characters" in order to return
the string from the beginning. */

  if(num <= 3){
    str=str.slice(0, num) + '...';
  } else if (num >= str.length) { //if num is greater than/equal to str's length, return the whole enchilada
    str = str;
  }
  /*here, slice from 0 to num-3 to account for returning a string `num`
  characters long *including* the three dots at the end. */
  else {
    str=str.slice(0, num-3) + '...';
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
