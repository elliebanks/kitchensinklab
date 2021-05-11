// name variable
let firstName = 'Ellie';

// number of US States as constant variable that will not change

const usStates = 50;

// compute the sum of 5 and 7

let sum = 5 + 7;
console.log(sum);

// create sayHello function with hello world alert
function sayHello() {
    alert("Hello World!");
    };

// call function for sayHello
sayHello();


// create function with two arguments
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
    };
// call checkAge function with 4 people
let charles = {
    name: 'Charles',
    age: 21
    };

let abby = {
    name: 'Abby',
    age: 27
    };

let james = {
    name: 'James',
    age: 18
    };

let john = {
    name: 'John',
    age: 17
    };

checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);

// create array of fav vegetables
let favVeggies = ['broccoli', 'asparagus', 'corn', 'potato'];

// create loop to display fav vegetables
for (let i=0; i < favVeggies.length; i++) {
    console.log(favVeggies[i])
    };

// create object with name and breed properties of pet

let myDog = {
    name: 'Blu',
    breed: 'collie'
    };
console.log(myDog);

// create array of 5 objects, each with name and age
let people = [
    {
        name: 'Liz',
        age: 28
    },
    {
        name: 'Bethany',
        age: 25
    },
    {   
        name: 'Jan',
        age: 60
    },
    {   
        name: 'Jessica',
        age: 15
    },
    {   
        name: 'Michael',
        age: 16
    }]

// create loop to call checkAge function for each object in array
for (let i=0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age)
    };

// create a function called getLength that takes any word as an argument and returns number of characters
function getLength(string) {
    return string.length;
    };

// call getLength function
getLength('Hello World!');

// store the return of getLength function as a variable
let word =  getLength('Hello World!');

// determine if the return of function is an even or odd number and display message
if (word % 2 == 0) {
    console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }