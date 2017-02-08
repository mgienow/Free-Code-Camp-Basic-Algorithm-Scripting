/* Free code camp very first JS algorithm challenge!

Instructions: "Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string."  */

function reverseString(str) {
  var strArray= [];
strArray=str.split('');
var reverse = strArray.reverse();
reverse=reverse.join('');
return reverse;
}

reverseString("hello");
