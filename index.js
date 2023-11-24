// Write function isPalindrome
// Passes in a string?????
// Find method that reverses a string/letters & create a const named string?????
// Write an if else statement after answer is returned that takes in that returned value
// Create a sub function under isPalindrome to address the result of isPalindrome and whether it should log true or false

function isPalindrome(word) {
  let reversedString = [...word].reverse().join('')
  console.log(reversedString)
  
  let result;
  if(word === reversedString) {
    result = true
  } else {
    result = false
  }
  console.log(result)
  return result
}

isPalindrome('racecar')
isPalindrome('robot')


/* 
// Write function isPalindrome
// Passes in a string?????
// Find method that reverses a string/letters & create a const named string?????
// Write an if else statement after answer is returned that takes in that returned value
// Create a sub function under isPalindrome to address the result of isPalindrome and whether it should log true or false
/*
I created the function isPalindrome to do one of 2 things:
1. Take a word and plug it into the reversedString variable which: 
  a. Takes the letters from the original word using the spread operator 
  b. Reverses the letters using the reverse() method 
  c. Then stitches the letters back together using the join() method - it also turns it into a string by utilizing '' in the parenthesis. 
2. Take the result of reversedString and uses an if else statement to gauge whether the original word spelled backwards is true or false
  a. If it is true, it logs true and returns true thus closing out the function
  b. If it is false, it logs false and returns false thus closing out the function
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
