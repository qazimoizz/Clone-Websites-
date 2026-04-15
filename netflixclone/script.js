// let score = prompt("Enter your score 0-100: ");
// let grade;

// if (score >= 90 && score <= 100){
//     grade = "A";
// } else if (score >= 80 && score <= 89){
//     grade = "B";
// } else if (score >= 70 && score <= 79){
//     grade = "C";
// } else if (score >= 60 && score <= 69){
//     grade = "D";
// } else {
//     grade = "F";
// }

// let mode = "royalblue";
 
// if(mode === "dark"){
//    mode = "black";
// } else if(mode === "light"){
//    mode = "white";
// } else if(mode === "purple") {
//    mode = "purple";
// } else {
//    mode = "there is no mode";
// }

// console.log("Your mode is =", mode);



// console.log("Your grade is " + grade);

// for (let num = 0; num <= 100; num++){
//  console.log("num=", num);
//  if(num % 2 === 0){
//     console.log("num=", num);
//  } 
// }

// while loop work 


// let carName = "mustang";
// let dreamCar = prompt("Enter your dream car: ");

// while (dreamCar !== carName){
//    dreamCar = prompt("entered the wrong dream car: ");
// }
// console.log("you entered the right dream car");


// let dreamCar = prompt("Enter your dream car: ");

// for (nameCar = "mustang"; dreamCar !== nameCar; nameCar = "mustang"){
//    dreamCar = prompt("Enter wrong dream car: ")
// }
// console.log("you entered the perfect dream car");

// let str = "apnacollege"

// console.log( str[5]);

// let Fullname = prompt("Enter your name: ");
//  let username = concate("@"+ Fullname);
// console.log(username);

// let heroes = ["ironman", "spiderman", "thor", "hulk", "captain america"];

// for (let idx = 0; idx < heroes.length; idx++){
//     console.log(heroes[idx]); 
// }

// let marks = [90, 85,67, 58, 48, 50];

// let sum = 0;

// for (let val of marks){
//     sum = sum + val;
// }
// // console.log(sum);
//     let avg = sum / marks.length;
//     console.log(avg);

// let items = [250,645,300,900,50];
// i = 0;
// for(let vale of items){
//     console.log(`vale of index ${i} = ${vale}`);
//     offer = vale / 10;
//     items[i] = items[i] - offer;
//     console.log( `vale of items after offer = ${items[i]}`)
//     i++;
// }

// let items = [250,645,300,900,50];


// for ( i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(items[i]);
// } 


// let companies = ["bloomber", "microsoft", "google", "uber" ,"ibm" , "netflix"]
// console.log(companies);
//  let  deleted = companies.shift();
// console.log( `deleted items after = ${deleted}`);
// console.log(companies);
// companies.splice(2,1,"ola");
// console.log(companies);
// companies.push("amazon");
// console.log(companies);
// let arr = [1,2,3,4,5,6];

// arr.forEach((num) =>{
//     console.log(num * num);
// } )



// let marks = [90, 97,92, 88, 78, 50];


// marks.filter((marks) => {
//     if(marks >= 90){
//         console.log(marks); 
//     }    
// })


let n =prompt("Enter your number: ");

arr = [];

for (let i = 1; i <= n; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) =>{
    return res + curr;
})
 
console.log(sum);

let factorial = arr.reduce((res, curr) =>{
    return res * curr;
})
 
console.log(factorial);