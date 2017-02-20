/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
*/

function mutation(arr) {
  //We are passed an array. `arr` containing two strings (for example, ["hello", "hey"]).
  //split the array into two separate string variables, rendered to lower case for ease of comparison:
  var strOne=arr[0].toLowerCase();
  var strTwo=arr[1].toLowerCase();
  //We are checking to see if strOne contains at least one instance of every letter that appears in strTwo.
  //Iterate over strTwo with a for loop as an argument for the indexOf method applied to strOne.
  for(var i=0; i<strTwo.length; i++){
      if(strOne.indexOf(strTwo[i]) < 0)
  //The indexOf() method returns a number -- the first index at which a given element can be found in the array, or -1 if it is not present.
  //so if strTwo has a letter that does not appear in strOne, strOne.indexOf(strTwo[i]) returns -1.
  //Our test condition is whether strOne.indexOf(strTwo[i]) is less than zero, or greater than/equal to 0.
  //If it is less than zero, the letter does not appear in the target string and the function returns FALSE
        return false;
    }
  //Otherwise, if all the letters in strTwo do indeed appear in strOne, the for loop does nothing and ends, and then
  //the function returns TRUE.  
    return true;
  }
