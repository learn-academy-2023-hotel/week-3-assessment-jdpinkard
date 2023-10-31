// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// describe("fibonacciSequence", () => {
//   it('takes in a number (greater than 2) and returns an array containing the Fibonacci sequence', () => {
//     expect(fibonacciSequence(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibonacciSequence(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })
// Good Fail: ReferenceError: fibonacciSequence is not defined
const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// Pseudo code:
// create a basic function
// use a conditional statement that takes in the parameter of the function to see if it is greater than 2
// create a variable to act as a placeholder for the array (const sequenceHolder)
// create a for loop to iterate through the fibFormula, having the intializer start 1, condition to stop being less than the paramenter entered -1, and the normal incrementation of ++
// create a variable fibFormula to represent the actual fib formula
// Assuming the intializer starts at 1 index, the fibFormula takes the last two indexs, [ 1,  1] in this case and adds them together.
// create a syntax that takes the new number created at fibFormula and .push()s it on to sequenceHolder
// Repeats until For loop condition is met creating an array of (number) length of the fib squence and returns the array.

// b) Create the function that makes the test pass.
function fibonacciSequence(number) {
  if (number > 2) {
    const sequenceHolder = [1, 1]
    for (let i = 1; i < number-1; i++) {
      let fibFormula = sequenceHolder[i-1]+ sequenceHolder[i]
      sequenceHolder.push(fibFormula)
    }
  return sequenceHolder
  }
}
// console.log(fibonacciSequence(fibonacciLength1))
// Passed Test

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// describe("sortObjectValues", () => {
//   it('a function that takes in an object and returns an array of the objects values sorted from least to greatest.', () => {
//     expect(sortObjectValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(sortObjectValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })
// Good Fail:  ReferenceError: sortObjectValues is not defined

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
// It is very possible I do not understand the instructions here. The code below is ChatGPT. I don't know why you would rewrite the code if it works because having just seen it, I would write the same thing because the problem remains the same. For example, if we had a class lecture that went over a problem, and then we are asked to solve the exact same problem. Wouldn't the answer be the same?

// For me, I'd rather be given the following:
// Create a function that takes in an object and returns an array of the object's values sorted from least to greatest. (Hint: Look up other methods and processes such as for looping through an object, using .hasOwnProperty() method, and taking a deeper look at the .sort() method). (surprisingly chatGPT didn't use .values() method until I told it to use it to solve it.)
// That would give me a clue as to where to look to answer the question, it would broaden my thinking because I would be doing something new, and I would have a greater understanding of the methonds and for looping through an object. I really don't like using chatGPT. It's easy to get an answer. Very true, and if that's the purpose then okay. I do research what methods are used and how they work, but I just feel like I'm doing something wrong. If by chance you come back and say answer a different way, just assume I did not answer it because I will not other than what I am doing now.

// Pseudo code:

// function sortObjectValues(object) {
//   // create a a simple function
//   const values = [];
//   // create a variable to hold the array
//   for (let key in object) {
//     // create a for loop that runs through an object checking each key. Once there are no more keys, it will stop.
//     if (object.hasOwnProperty(key)) {
//       // create a conditional that checks if the object does have a key
//       // .hasOwnProperty checks to see if there is a value attached even if it is null or undefined. Returns false if the value is inherited or not declared.
//       values.push(object[key]);
//       // If it does, push.() the key value to values array
//     }
//   }
//   values.sort((a, b) => a - b);
//   // Use .sort() on values using a comparision function which compares two elements. If the value comes back negative, it tells .sort the a should come before b. If positive, then a is greater than b and should be placed behind. If it comes back as 0, it would mean they are the same value or equal to each other thus no change in order needed.

//   return values;
//   // Return the values array
// }

function sortObjectValues(obj) {
  // create a simple function
  return (Object.values(obj)).sort((a, b) => a - b);
  // Use Object.valuse() to take in the object and place the keys(values) into an array
  // Use .sort() on values using a comparision function which compares two elements. If the value comes back negative, it tells .sort the a should come before b. If positive, then a is greater than b and should be placed behind. If it comes back as 0, it would mean they are the same value or equal to each other thus no change in order needed. (I'm now writing that twice... whew)
  // Return the value
}

// For whatever reason, ChatGPT used Array.from() on line 118. That seems redundant because all it would be able to do is iterate through since there is no arguement and just recreate the array. So I removed it.

console.log(sortObjectValues(studyMinutesWeek2))
// passed test

// Now all this being said. If I answered question 2 the correct way using chatGPT, please tell me I am. Otherwise... I'm still at a lost.





