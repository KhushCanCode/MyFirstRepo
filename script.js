//Question 1 ---------------------------------------------------------------------------------

// const numArray = [2, 5, 7, 3, 4, 5];
// console.log("Element array is         : " + numArray);

// let sqArray = numArray.map(num => num*num);
// console.log("Sqaured element array is : " + sqArray);


//Question 2 ----------------------------------------------------------------------------------

// const gradeStudent = (score) =>{

//     let grade = (score>=0 && score<=29) ? 'F' :
//                 (score>=30 && score<=39) ? 'E' : 
//                 (score>=40 && score<=49) ? 'D' : 
//                 (score>=50 && score<=69) ? 'C' :
//                 (score>=70 && score<=89) ? 'B' : 
//                 (score>=90 && score<=100) ? 'A' :
//                 'Dumb, Enter right score.';
//     return grade;
// }

// let score = 90;
// const gradeOfStud = gradeStudent(score);

// console.log("Score:" + score);
// console.log("Grade:" + gradeOfStud);


//Question 3-------------------------------------------------------------------------------------

// let car = {
//     company_name : 'Mercedes',
//     model : 'XA893-2',
//     year : '2002'
// };
// console.log(car);

// console.log("Changing Car's Year property...");
// const changeYear = (car) => {car.year = '1994';}
// changeYear(car);

// console.log(car);

// console.log("Dstructuring...");
// const {model, year} = car; //destructuring

// console.log('Model of Car: ' + model);
// console.log('Year of Car: ' + year);


//Question 4 -----------------------------------------------------------------------------------

// const numArray = [2, 5, 19, 17, 13, 4, 25, 20, 5, 8, 73, 47];
// console.log("Element array is: " + numArray);

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 2; i*i<= num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// const primeArray = numArray.filter(isPrime);

// console.log("Prime array is  : " + primeArray);


//Question 5------------------------------------------------------------------------------------

// 1. Map--------------------

// ->The map function creates a new array populated with the results. each element is changed.
// let sqArray = numArray.map(num => num*num);

// -> When we want to populate the divs in html just using javascript.

// const htmlString = students.map((student) => {
//     return `
//     <li class="student">
//         <p>Student Name: ${student.name}</p>
//         <p>Marks: ${student.marks}</p>
//         <p>Class: ${student.class}</p>
//         <p>Address: ${student.address}</p>
//     </li>
// `;
// })
// .join('');
// studentsList.innerHTML = htmlString;


// 2. Filter-------------------

// ->Filtering Data: Create a new array with only the elements that meet certain criteria.
//  const primeArray = numArray.filter(isPrime);

// -> Filtering posts on the basis of tags.

// -> Making things searchable.
// const filteredStudents = students.filter((student) =>{
//     return student.name.toLocaleLowerCase().includes(searchString) 
   
// });

// ->Finding Specific Objects: Extract specific objects from an array of objects based on a condition.
// const users = [{ name: 'Alice', active: true }, { name: 'Bob', active: false }];
// const activeUsers = users.filter(user => user.active);

// 3. Reduce-----------------------

// ->Flattening Arrays: Flatten a nested array into a single array.
// const nestedArray = [[1, 2], [3, 4], [5]];
// const flatArray = nestedArray.reduce((acc, val) => acc.concat(val), []);

// ->Summing Values: Calculate the sum of an array of numbers.
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, num) => acc + num, 0);

// ->Counting Occurrences: Count the number of occurrences of items in an array.

// ->Creating Lookup Tables: Transform an array of objects into an object keyed by a specific property.
// const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
// const userLookup = users.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// }, {});


//Question 6 ------------------------------------------------------------------------------------

// async function fetchData(){
//     try{
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

//         if(!response.ok){
//             throw new Error("Could not fetch data.");
//         }
//         const data = await response.json();
//         console.log("Pokemon Name: " + data.name);
//         console.log("Pokemon Height: " + data.height);
//         console.log("Pokemon Weight: " + data.weight);
//         console.log("Pokemon Ability: " + data.abilities[1].ability.name);
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// fetchData();


//Question 7 -------------------------------------------------------------------------------------

// const person = {
//     name: "Rohan",
//     address: {
//         street: "123",
//         city: "Rohtak",
//         state: "Haryana",
//         zip: "12423"
//     },
//     contact: {
//         email: "rohan78@example.com",
//         phone: "893408032"
//     }
// };

// const personWithoutContact = {
//     name: "Ravi",
//     address: {
//         street: "456",
//         city: "Rewari",
//         state: "Haryana",
//         zip: "67890"
//     }
// };

// // Accessing phone number with optional chaining
// const phoneNumber = person.contact?.phone;
// console.log(phoneNumber); 

// const missingPhone = personWithoutContact.contact?.phone;
// console.log(missingPhone);