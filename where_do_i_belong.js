/*  Where do I belong
Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater
 than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has
 been sorted it will look like [3,5,20] and 19 is less than 20 (index 2)
 and greater than 5 (index 1).

TEST CASES:
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.

*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

//Clearly this is a job for array.prototype.sort, but it needs to be done with a callback.
//arr.sort() returns numbers in ascending *Unicode* order, meaning that [3,5,20,3,2] returns [2, 20, 3,3,5]
//to return in numerical ascending, use arr.sort(function(a,b){return a-b;}); so [3.5.20,3,2] returns [2,3,3,5,20]
  sortedArr=arr.sort(function(a,b){return a-b;});
//now, loop over the array to compare array elements with the target variable `num`:
  for(i=0; i<sortedArr.length; i++){
//so if num is smaller than or equal to a given array number, return that array element's index position:
    if(num<=sortedArr[i]){
      return (sortedArr.indexOf(sortedArr[i]));
    }
//otherwise, if num is larger than any number in the array, it needs to be added at the end index position
// so return sortedArr.length:
    else if(num>sortedArr[sortedArr.length-1]){
return sortedArr.length;
    }
  }
}

getIndexToIns([40, 60], 50);
