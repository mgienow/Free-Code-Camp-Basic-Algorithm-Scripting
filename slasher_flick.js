/*Slasher Flick
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].
 */

 function slasher(arr, howMany) {
  // it doesn't always pay to be first
  //splice(start, howMany) removes the designated elements and returns the remaining array:
  //our instructions are to start from the head, so start is 0 index, and the
  //howMany to remove parameter is passed in as an argument.
  arr.splice(0, howMany);
  return arr;
}
