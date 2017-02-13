/*Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

String.prototype.substr()
String.prototype.substring()

confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
*/
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  //split the argument strings into arrays consisting of single letters:
 var strArray=str.split('');
 var targetArray = target.split('');

/*Now iterate over both arrays *working backward from the end* to compare
 -- For loop must start with i=1 because the last letter in the array will be at index position array.length-1
*/
  for (var i=1; i<=targetArray.length; i++){
//If the last letters are the same AND the target array has only one letter, return true
//(otherwise, the arguments could end in two different words that have the same final letter, returning a false "true")
  if(strArray[strArray.length-i] === targetArray[targetArray.length-i] && targetArray.length===1){
    return true;
  }
//Now move on to the next-to-last letter of the argument strings: if they match, return true
  else if(strArray[strArray.length-(i+1)] === targetArray[targetArray.length-(i+1)]) {
    return true;
    }
//otherwise, you have no match so return false
    else {
      return false;
    }
  }
}
