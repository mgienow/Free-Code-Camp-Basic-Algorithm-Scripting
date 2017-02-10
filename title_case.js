/*Title Case a Sentence
Return the provided string with the first letter of
each word capitalized. Make sure the rest of the
word is in lower case.

For the purpose of this exercise, you should
also capitalize connecting words like "the" and "of".

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

*/
function titleCase(str) {
  //convert string argument to all lower case:
  str=str.toLowerCase();

  //set variable to hold string converted to array
  var titleArray=str.split(' ');

  //set variable as empty array to hold converted Upper Case elements
  var final = [];

  /*iterate through titleArray to take the first letter of each element
  convert to upper case, then slice the original first letter
   and add the rest of the word to the new initial Upper Case letter.
    Push resulting word to the `final` array.*/
  for(var i=0; i<titleArray.length; i++){
    final.push(titleArray[i][0].toUpperCase() + titleArray[i].slice(1));
  }

  /*Time to return the new capitalized sentence - AFTER using join()
   to convert the array final to a string final */
  return final.join(' ');
}

titleCase("I'm a little tea pot");
//"I'm A Little Tea Pot"
