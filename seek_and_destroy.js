/*
You will be provided with an initial array (the first argument in the destroyer function),
 followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

This challenge taught me about the arguments object. Anything passed into a function as an arguments
can be treated like an array in that it will have a discoverable length property:
var argsLength = arguments.length
You can also turn it into an array using various methods, like Array.from(arguments):
function testy(arr, someArgs) {
console.log(testy.arguments)
console.log(arguments.length);
}
testy([1,2,3], 4, 5)
//[Array[3], 4, 5]
// 3
*/

function destroyer(arr) {
  //first we are iterating over arr, which is an array passed in as argument
  //"invisible" here is that there will be additional values passed in as arguments when the funciton is called.
  for(var i=0; i<arr.length; i++){
  //establish a variable that will hold the value of whatever is in arr at the [i]index, so we can
  //compare it to the remaining arguments (outside the array):
   var v=arr[i];
//now a second loop to iterate over the non-array arguments. If v (which is arr[i]) holds
//a value equal to argument at j index (and j starts at one, since arr is at [0])
//then we splice that value from arr. The crucial trick here is to then iterate i BACK DOWN
//by one count, because otherwise the i loop moves forward and will miss any  other matching values
//still resident in higher index positions in arr.  i-- ensures that arr gets looped over until there are
//no more matching values!

    for(var j=1; j<arguments.length; j++){
      if (v === arguments[j]) {
        arr.splice(i,1);
        i--;
      }
    }
  }
  return arr;
}
