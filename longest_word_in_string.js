/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/
function findLongestWord(str) {
  //establish empty array variable to hold "str"
  var longArray=[];
  // split string "str" into array where each word has its own index postion:
  longArray=str.split(' ');

  //establish variable to hold the length of the first element:
  var longest = [longArray[0].length];

  //iterate through the array **starting at index [1]**
  for(var i=1; i<longArray.length; i++){
    //assign the length of the words at i and i-1 to variables
    var a = longArray[i].length;
    var b = longArray[i-1].length;

  //test condition: if the first index value is greater than the second index value, push that greater value (a) to array "longest".
    //Otherwise, do nothing and move on to the next [i]:

    if(a>b){
      longest.push(a);
  //"longest" already holds [0] and now potentially holds a second element.  iterate thru both elements to compare, and remove the smaller of the two from the array.
      for(var j=0; j<longest.length; j++){
        if(longest[0]<longest[1]){
          longest.splice(0,1);
        } else {
          longest.splice(1,1);
        }
  //exit "j" loop with array "longest" again holding only one value
      }
    }
  }
 //convert longest from an array to an integer and return the value:
  longest = Number(longest);
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
