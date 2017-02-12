/*Return Largest Numbers in Arrays
Return an array consisting of the largest
number from each provided sub-array.
For simplicity, the provided array will
contain exactly 4 sub-arrays.

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

*/

function largestOfFour(arr) {
  // You can do this!
  /*establish variable with empty array to
  hold largest numbers from arr: */
  var largest = [];
  /*Iterate through the arrays using sort() to order
  the sub=arrays' elements in ascending numeric;
  */
  for(var i=0; i<arr.length; i++){
    arr[i].sort(function(a,b){return a-b;});
  }
  /* now iterate through the arrays to push the last
  element, which will be the largest number,
  located at **arr.length-1** to the new array
  "final" ;
   */
    for (var j=0; j<arr.length; j++){
        largest.push(arr[j][arr.length-1]);
      }

  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
