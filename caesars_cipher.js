/* One of the simplest and most widely known ciphers is a Caesar cipher, also
known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted
 by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
 (i.e. spaces, punctuation), but do pass them on.

 rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
 rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
 rot13("SERR YBIR?") should decode to "FREE LOVE?"
 rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/

function rot13(str) { // LBH QVQ VG!
//initialize an empty array variable, `translate`, and then iterate over the passed
//string argument to translate each entry into its unicode character value and
//push it into the new array:
  var translate=[];
  for(var i=0; i<str.length; i++){
    translate.push(str.charCodeAt(i)); //LBH QVQ VG! => [76, 66, 72, 32, 81, 86, 81, 32, 86, 71, 33]
  }

//then, iterate over the new array to "shift" the cipher letter's value to the value
//of the translated letter. This must be done in two sections: A=65 thru M=77 form the
//first half of the alphabet, and then N=78 thru Z=90 the second.

//This works because
//the argument strings will always be in capital letters; lower case letters have
//their own separate unicode values which are outside the scope of this challenge. But we
//could compensate by inserting str.toUpperCase() method as one way to compensate.
  for(var j=0; j<translate.length; j++){
//IF a letter's unicode value is between 65 & 77, inclusive, add 13 to "push" it to the
//second half of the alphabet;
    if(translate[j]>=65 && translate[j]<=77){
      translate[j] = translate[j]+13;

//ELSE IF a letter's unicode value is between 78 & 90, inclusive, subtract 13 to Find
//the corresponding cipher position in the first half of the alphabet:
    } else if(translate[j]>=78 && translate[j]<=90){
      translate[j]= translate[j]-13; // [76, 66, 72, 32, 81, 86, 81, 32, 86, 71, 33] => [89, 79, 85, 32, 68, 73, 68, 32, 73, 84, 33]
      }
//Note: no translation is necessary for spaces and punctuation characters, all of which have --
// and will simply retain -- their own Unicode values. For example, a space holds Unicode value of 32
//and an exclamation point is 33. THese lie outside the ranges we are evaluating for letter characters.
  }
//Now, establish a new empty array variable, `answer`, to hold the converted unicode values
//rendered back into string characters.
    var answer=[];
    for(var k=0; k<translate.length; k++){
      answer.push(String.fromCharCode(translate[k]));
    }
    answer=answer.join("");
    return answer;    // [89, 79, 85, 32, 68, 73, 68, 32, 73, 84, 33] => "YOU DID IT!"
};
