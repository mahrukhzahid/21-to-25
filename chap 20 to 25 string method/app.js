// // // Q1) Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 

let firstName = prompt('Enter Your First Name');
let lastName = prompt('Enter Your Last Name');
let fullName = firstName + lastName;
let greet = `Good Morning ${fullName}`;
console.log(greet);

// // // Q2) Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

let userFavMob = prompt('Enter your fav mobile phone model');
let lengthOfMob = userFavMob.split('');

console.log(`My Favourite Phone is: ${userFavMob}\nLength Of String: ${lengthOfMob.length}`);

// // // Q3) Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

let word = 'Pakistani';
console.log(`String: ${word}\nIndex Of 'n': ${word.indexOf('n')}`);

// // // Q4) Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

let word1 = 'Hello World';
console.log(`String: ${word1}\nLast index Of 'l': ${word1.lastIndexOf('l')}`);   

// // // Q5)  Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 

let word3 = 'Pakistani';
console.log(`String: ${word3}\nCharacter at index '3': ${word3[3]}`);
console.log(`String: ${word3}\nCharacter at index '3': ${word3.charAt(3)}`);

// // // Q6) Repeat Q1 using string concat() method.

let firstName1 = prompt('Enter Your First Name');
let lastName1 = prompt('Enter Your Last Name');
console.log(`Good Morning ${firstName1.concat(lastName1)}`)

// // // Q7) Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

let word4 = 'Hyderabad';
console.log(`City: ${word4}\nAfter replacement: ${word4.replace('Hyder','Islam')}`);

// // // Q8) Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”; 

let message = 'Ali and Sami are best friends. They play cricket and football together.';
console.log(`${message.replaceAll('and','&')}`);

// // // Q9) Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 

let str = '472';
console.log(`Value: ${str}\nType: ${typeof(str)}\nValue: ${+str}\nType: ${typeof(+str)}`);

// // // Q10) Write a program that takes user input. Convert and show the input in capital letters. 

let userInput = prompt('Enter any word that you want to see in capitalize form');
console.log(`User input: ${userInput}\nUpper case: ${userInput.toUpperCase()}`);

// // // Q11) Write a program that takes user input. Convert and show the input in title case. 

let userInput2 = prompt('Enter any word that you want to see in Title case');
console.log(`User input: ${userInput2}\nUpper case: ${userInput2.charAt(0).toUpperCase()+userInput2.slice(1)}`);

// // // Q12) Write a program that converts the variable num to string.Remove the dot to display “3536” display in your browser. 

let num = 35.36;
console.log(`Number : ${num}\nResult : ${num.toString().replace('.','')}`);

// // // Q13) Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
// // Note: 
// // ASCII code of ! is 33 
// // ASCII code of , is 44 
// // ASCII code of . is 46 
// ASCII code of @ is 64

let userName = prompt('Enter you name :');

for (let i = 0; i < userName.length; i++) {
    let charCode = userName.charCodeAt(i);
    if (charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64) {
        alert('Please enter a valid variable');
        break;
    }
}

// // // Q14) You have an array 
// // // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// // // Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// // // Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

let things = ["cake","apple pie","cookie","chips","patties"];
let order = prompt("Welcome to the ABC Bakery.What do you want to order Sir/Ma'am ?").toLowerCase();
if (things.includes(order)){
    alert(`${order} is available at index ${things.indexOf(order)} in our bakery`);
}
else {
    alert(`We are sorry.${order} is not available in our bakery`);
}

// // // Q15) Write a program to take password as an input from user. The password must qualify these requirements: 

// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
// If the password does not meet above requirements, 
// prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII 
// table at the end of this document. 

// // // Q16) Write a program to convert the following string to an array using string split method. 
// // // var university = “University of Karachi”; 
// // // Display the elements of array in your browser.

let university = 'University of Karachi';
let splitted = university.split('');

for (let i of splitted) {
    console.log(`${i}`);
}

// // // Q17) Write a program to display the last character of a user input.

// let userInput = prompt('Write any word');
console.log(`User input : ${userInput}\nLast character of input :${userInput[userInput.length-1]}`);

// // // Q18) You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// let str = 'The quick brown fox jumps over the lazy dog';
let wordToCount = 'the';
let lowerStr = str.toLowerCase();
let count = 0;
let words = lowerStr.split(' ');

for (let i = 0; i < str.length; i++) {
    if(words[i] === wordToCount) {
        count++;
    }
}
console.log(`Text : ${str}\nThe quick brown fox jumps over the lazy dog ${count}
    There are 2 occurrence(s) of word'the '${wordToCount}'`);