/*
Write a function that splits an array (first argument)
 into groups the length of size (second argument)
 and returns them as a two-dimensional array.

 chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

*/
function chunkArrayInGroups(arr, size){
  //establish newArr variable as empty array to hold the "chunks":
  var newArr=[];
  //now a while loop, instead of for loop, since we don't know what value of `size` is going to be:
  var i=0;
  while(i<arr.length){
    //so iterate across `arr` to slice arr into `size`-length pieces starting at index i=0,
    //and push the resulting sub-array into the newArray variable. `i` increments
    //in steps of i+=size, which moves the iteration past the previous slice to the next
    //"chunk" until you reach the end of the array. the final "chunk" may be any length.
    newArr.push(arr.slice(i, i+=size));
  }
  return newArr;
}
