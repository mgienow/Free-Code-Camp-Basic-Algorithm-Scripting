/* Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].

I first attempted this with comparison operators and typeof and got this ugly code:

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var truthy = [];

  for (i=0; i<arr.length; i++){
    if ((typeof arr[i] === 'string' || typeof arr[i] === 'number') && (arr[i] !== ""|| NaN || 0 ||null || undefined))
     truthy.push(arr[i]);
  }
  return truthy;
}
Not only did it not work as written (I have some notion that you can string together conditionals, need to
learn more about that) it turns out there was a simpler and more elegant tool: Boolean objects!
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
//establish new variable to hold empty target array:

  var truthy = [];
  // now, iterate the test array to evaluate each index entry for Boolean value* (see definition below):
  for (i=0; i<arr.length; i++){
    //strings and numbers evaluate to true; if so, push them to `truthy` array:
    if(Boolean(arr[i])===true)
     truthy.push(arr[i]);
  }
  //return the new array holding anything that passed the Boolean object test!
  return truthy;
}

bouncer([7, "ate", "", false, 9]);
//[7, "ate", 9]

/*From MDN: "If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""),
 the object has an initial value of false.
All other values, including any object or the string "false", create an object
with an initial value of true.*/
