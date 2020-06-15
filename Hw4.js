// 1- Write a function named [sayHi] and make it 
// contains 1 argument: [your name]

// 2- Create 2 arrays inside the function and make the first array contains 10 elements,
//  these elements are 10 different names and the second array contains the week days[Monday, ... Sunday]
// 3-Write code that randomly selects a name and a day
// make the function return an output like [Hello name today is daya], hint: [name, day] are dynamic data
// 4- make the function return an output like [Hello name today is daya], hint: [name, day] are dynamic data


function sayHi (Ihab){

     const  names = ['Ihab', 'Ahmad', 'Mohamad', 'Jan', 'Samir', 'Samira', 'Basem', 'Rabab', 'Maysoon','Rana'];
     const  days = ['Monaday','Tuesday','Wedensday','Thursday','Friday','Saturday' ,'Sunday'];
     const  name = names[Math.floor(Math.random() * names.length)];
     const  day = days[Math.floor(Math.random() * days.length)];
     // console.log(name,day) task number 4
    return console.log("Hello " + name + " Today is " + day );
}

sayHi();
console.log("=====================")

function sayHi5 (){
for (let i = 0; i < 5; i++) 
sayHi()
}
sayHi5(); 


console.log("=====================")

// 6- careate a function named [checkEvenOrAdd] and make it takes an array as argument
// 7- loop through the array and print out the result after checking the odd and even numbers
// 8- print this message ['This number [number] is odd/even'];

// let numbers = [1,2,3,4,5,6,7,8];



function checkEvenOrAdd (numbers){
    for (let num of numbers){
        if (num %2 == 0){
             console.log(" This number is odd");
        }else{
             console.log("This number is number is even");
        }
    }
}
checkEvenOrAdd([70,20,27,26 ,29 ,37])

console.log("=====================")

// 9- Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random string values that have to do with the name of the variable
// 10- Write a function named getData().
// 11- It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
// 12- Randomly select values from the arrays.
// 13- Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
// 14- Call the function 4 times, by passing the arrays as the argument.

let numChildren = [4, 1, 3, 9, 5,];


let partnerNames = [ "Samiha" , "Mona" , "Khaled" , "Mahran" , "Zena"];

let locations = ["Den Bosch", "Amsterdam","Homs", "Damas","Utrecht"];

let jobs = ["Programmer", " Lawyer", "Doctor", " Nurse", "Guard"];

function getData (){
    let numchild = numChildren[Math.floor(Math.random() * numChildren.length)];
    let partnerName = partnerNames[Math.floor(Math.random()* partnerNames.length)];
    let loc = locations[Math.floor(Math.random() * locations.length)];
    let job = jobs[Math.floor(Math.random() * jobs.length)]

    let randomly = " you will be a " + job + " in " + loc + " Married to " + partnerName + " with " + numchild + " kids "; 
    return console.log(randomly);
}
getData()

function getdata5 (){
    for (let i = 0; i < 5; i++){
        getData()
    } 
    }

getdata5()

console.log("=====================")
// 15- Let's do some shopping and don't forget that we are going to do some cooking so our function name named makeFoods() and put in your mind that you don't have much money to buy 
// so you want to be assure that you can buy more than 3 items and once you buy the fourth one then the first item will be dropped from the list
// 16- Create an array called shoppingCart that holds these strings: "bananas" and "milk"
// 17- make the function take one argument, it's string
// 18- Add grocery item to shoppingCart. If the amount of items is more than 3 remove the first one in the array
// 19- print out the items by listing out the items
// 20- Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
// 21- Call the function 5 times, each time with a different string as the argument.
// // the Expected output
// makeFoods('chocolate'); // Returns "You bought bananas, milk, chocolate!"



let shoppingCart = ["Banan ","Milk " ]
function show (){
    console.log(  "you bought " +  shoppingCart)
}
function makeFoods(str){

    if (shoppingCart.length <= 2 ) {
        shoppingCart.push(str)

    } else {
        shoppingCart.push(str)
        shoppingCart.shift(str)
    }
    // return print ( "you bought " +  shoppingCart)
    return show ()
    }
   
 makeFoods("Choco")
 makeFoods("Sugar")
 makeFoods("cola")
 makeFoods("nuts")

 console.log("=====================")

//  22- write a function, called validateCreditNumber, that validates whether or not a credit card number is valid.
//  23- Input must be 16 characters and All characters must be numbers
//  24- At least two different numbers should be represented and the last number must be even
//  25- The sum of all the numbers must be greater than 16
//  --The following credit card numbers are valid: [9999777788880000] and [6666666666661666]
//  --The following credit card numbers are invalid: [a92332119c011112 => invalid characters], [4444444444444444 => only one type of number], [1111111111111110 => sum less than 16]
//  [6666666666666661 => odd final number]
//  // Expected output
//  validateCreditNumber('a92332119c011112'); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
//  validatecreditNumber('6666666666661666'); // Returns "Success! The input 6666666666661666 is a valid credit card number!


function validateCreditNumber(input){

    let onlyNum = input.match(/^[\+\d]+$/)
    let validLength = input.length == 16
    let sumLimit = input.split("input") >= 16
    let isEven = input %2 == 0 ;
   if(onlyNum && validLength && isEven && sumLimit){
       console.log( "Success! The input " + input + "is a validcredit card number")
   }else{  
       console.log("Invalid! The input " + input + " should contain only numbers!")
   }
}

validateCreditNumber('a92332119c011112');
validateCreditNumber('6666666666661666');
validateCreditNumber('1234567890123456');
validateCreditNumber('1234567ytrewqasdf');
validateCreditNumber('1234567890123457');
validateCreditNumber('0000000000000000');

console.log("=====================")
// 26- create an array named [employees] with 5 objects, each object shoul contain [name, age, salary];
// 27- do solme filtering by exposing the employees who their salaries are greater than 2000, it should return 3 objects from the the 5 which you created before
// 28- print out the result like ["[name] is a rich man because his salary is [salary]"];

let employees = [ 
    {name: "Maher", Age: 23, salary: 1200},
      {name: "Adnan", Age: 40, salary: 2900},
      {name: "Lama", Age: 28, salary: 1900},
      {name: "Maha", Age: 29, salary: 2050},
      {name: "Anas",Age: 21,salary: 1100},
      {name: "Kareem",Age: 37,salary: 2500}
    ];


    // let richEmployees = [];
    // for (let i = 0; i < employees.length; i++) {
    //     if (employees[i].salary > 1999) {
    //         richEmployees.push(employees[i]);
    //     }
    // }
    // console.log(richEmployees);
    
    let richEmployees = employees.filter(employees => employees.salary > 2000);
    console.log(richEmployees);
    
    let richName = richEmployees.map((richEmployees) => richEmployees.name)
    let richSalary = richEmployees.map((richEmployees) => richEmployees.salary)
    for (let i = 0; i < richEmployees.length; i++)
    console.log (richName[i] + " is rich because his/her salary is " + richSalary[i] ); 
    
    console.log("=====================")

    // // 29 -please note down what the difference is between map and foreach, please provie me an example if you can
    
    // // .map (aslo .filter) always returns a new array. on the other hand .for each doesnt return an Array instead, is the return from foreach is undefind. 
 


    console.log("=====================")
 /* 30- I have this array
const votes = ['no', 'yes', 'yes', 'no', 'yes', 'yes', 'no', 'yes', 'yes','no', 'no', 'yes', 'no'];
I want you to count how many [yes] and [no] values do we in the array by useing [reduce] function
-- the output should be {yes: 7, no: 6};
**hint: the initial value should be an empty object like this {};
*/
let votes = ['no', 'yes', 'yes', 'no', 'yes', 'yes', 'no', 'yes', 'yes','no', 'no', 'yes', 'no'];

let counter = votes.reduce(function(allVotes,vote) { 
    if (vote in allVotes){
        allVotes[vote]++
    }
        else{
        allVotes[vote] =1 
    }
    return allVotes
 },{}           ) 
console.log(counter)

console.log("=====================")

/* 
    31- you have this array

Let's assume your hourly rate is €20. How much would you earn on that day?
32- Write a program that finds out what your hourly rate on a Monday would be
33- Use the map array function to take out the duration time for each task.
34- Multiply each duration by a per-hour rate for billing and sum it all up.
-- Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34
-- Make sure the program can be used on any array of objects that contain a duration property with a number value
*/
const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, 
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];

  const TotalOnMonday = mondayTasks.map(function(monday){
    return (monday.duration)
})
console.log(TotalOnMonday);
  
  let minOnManday =mondayTasks.reduce(function(a,b){
      return a + b.duration
  },0 );
  
  let durationInMonday = minOnManday / 60 //in hours
  console.log(durationInMonday + " hours work on monday ")
  

let  earnsonMonday = durationInMonday * 20
console.log(earnsonMonday)

  console.log("=============");

//   35- suppose you bought all these stuff 
//   const electronicsBasket = ['Keyboard', 'Mouse', 'HardDrive', 'Mouse', 'CD', 'Charger', 'Mouse'];
//   -- Write a function with any specific name
//   -- Use the filter array function to take out the mouse
//   -- Output a string that says: "I bought these stuff and my basket, containing [array of mouses] !"
const electronicsBasket = ['Keyboard', 'Mouse', 'HardDrive', 'Mouse', 'CD', 'Charger', 'Mouse'];
  

const mouseTrap = electronicsBasket.filter(electronicsBasket =>{
    return electronicsBasket.includes("Mouse");
})
        
console.log("I bought these stuff and my basket, containing " + mouseTrap);
