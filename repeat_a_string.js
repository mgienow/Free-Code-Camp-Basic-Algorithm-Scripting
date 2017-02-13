/*
Repeat a string repeat a string
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.

repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/

function repeatStringNumTimes(str, num) {
  //Set up a counter variable to hold the repeated strings, intialized as empty string
  var repeat='';
  /*if `num` argument is less than zero, return `repeat` which is an empty string;
  otherwise, proceed to `for` loop. Concatenate str to `repeat` variable each time
  the loop executes; then exit loop, and return `repeat` string */
if(num < 0){
  return repeat;
} else {
  for(var i=0; i<num; i++){
  repeat=repeat.concat(str);
}
  return repeat;
}
}
