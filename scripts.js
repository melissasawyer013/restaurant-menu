let fullName = prompt("What is your first and last name?");
let birthYear = prompt("What is your birth year?");
let favFoods = prompt("What are your top 3 favorite foods (separate by commas)?");
let petStatus = prompt("Do you have a pet?");

// Create an object using the object literal notation.
// let user = {
//     fullName: "",
//     birthYear: 0,
//     favFoods: [],
//     petStatus: "",
// };

// OR
let user = {};


// Extract the user's first name using two String methods and store it in the object. (Hint: you can use .indexOf(' ') to find a space in a string, and .substring() to extract part of a string - click links for more info)
let spaceIndex = fullName.indexOf(" ")
user.firstName = fullName.substring('0', spaceIndex);
user.lastName = fullName.substring(spaceIndex + 1, fullName.length);

// Log the first name to the console.
console.log(user.firstName);

// Do the same with the user's last name and log it to the console.
console.log(user.lastName);

// Calculate the user's age and log it to the console.
user.birthYear = birthYear;
user.getAge = function() {
    console.log(`You will be ${2020 - birthYear} years old by the end of this year.`);
}
user.getAge();

// Extract the comma separated list of favorite foods and store it into an array in the object.
user.favFoods = favFoods.split(", ");

// Loop through the array to log the messages "I love [food]" for each item in the array.
for(let i = 0; i < user.favFoods.length; i++) {
    let message = "I love ";
    console.log(message.concat(user.favFoods[i]));
};

// If the user has a pet, log a positive message, otherwise tell them they should get one.
if (petStatus === "no"){
    console.log("Pets are awesome, and you should get one!");
} else {
    console.log("Woo! Me too!");
};

// Log the object to the console. Note to not include anything else when logging: console.log(object);

console.log(user);









// let fullNameEntered = prompt("Enter your full name:");
// let fullNameArray = fullNameEntered.split(" ");
// let birthYearEntered = Number(prompt("What year were you born?"));
// let favoriteFoodsEntered = prompt("What are your top 3 favorite foods? (separate with commas)")
// let favoriteFoodsArray = favoriteFoodsEntered.split();
// let havePetEntered = prompt("Do you have a pet?").toLowerCase;


// console.log(fullNameArray);
// console.log(favoriteFoodsEntered);
// let userInfo = {
//     fullName: fullNameEntered,
//     firstName: fullNameArray[0],
//     lastName: fullNameArray[fullNameArray.length - 1],
//     logFirstName: function() {
//         console.log(userInfo.firstName);
//     },
//     logLastName: function() {
//         console.log(userInfo.lastName);
//     },
//     birthYear: +birthYearEntered,
//     logAgeAtEndOfYear: function() {
//         console.log(`Age at end of the year: ${2020-birthYearEntered}`)
//     },
//     favoriteFoods: favoriteFoodsEntered,
//     logFavoriteFoods: function() {
//         for (const el of favoriteFoodsArray) {
//             console.log(`I love ${el}`);
//         };
//     },
//     // havePet: havePetEntered,
// }

// // userinfo();
// userInfo.logFirstName();
// userInfo.logLastName();
// userInfo.logAgeAtEndOfYear();
// userInfo.logFavoriteFoods();