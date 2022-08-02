//let praiseThyLord ="adoration";
//console.log(praiseThyLord);

//const arrClass = []
//const newClass = new Array();
//newClass.push('name');
//arrClass.push(True);
    
//console.log(newClass)
//console.log(arrClass)

// const fruits =['Apple', 'Banana']

// fruits.push('Water Melon')
// fruits[1] = 'Pear'

// fruits.push('Coconut')

//let someFruits = fruits.slice(1, 2);
//let someFruits = fruits.slice(1, 3);
//let someFruits = fruits.slice(-1);
//let someFruits = fruits.slice(1);
// let someFruits = fruits.splice(1, 1, 'Cherry', 'Pawpaw')


// console.log(someFruits)
// console.log(fruits);
//console.log(fruits.length);
// console.log(fruits.indexOf('Banana'))
// console.log(fruits.indexOf('Apple'))
// console.log(fruits.indexOf('Mango'))
// console.log(fruits[fruits.length-1])
//let aToken ='Brearer hfushofewij30r3hjlkouoybf'
//let tokenSplit = aToken.split(' ')
//console.log(tokenSplit)
//console.log(tokenSplit[0])
//console.log(tokenSplit[1])

const fruits = ['Apple', 'Strawberry', 'Cherry', 'Banana', 'Mango', ''];
const peopleAges = [12, 45, 23, 25, 56, 67, 66, 95, 21, 26, 17, 28, 43];

// let spliceFruit = fruits.splice(2, 2, "Pawpaw", "Orange")
// let spliceFruit = fruits.splice(1, 2, "Guava", "Apple")
// let sliceFruit = fruits.slice(3, 5)
// console.log(fruits)
// // console.log(spliceFruit)
// console.log(sliceFruit)

let newFruits = [];
for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === "Cherry" || fruits[i] === "Banana"){
        newFruits.push(fruits[i])
    }
    // console.log(fruits[i])
}
console.log(newFruits)

let newAges = [];
// for(let i = 0; i < peopleAges.length; i++){
//     if (peopleAges[i] < 40){
//         newAges.push(peopleAges[i])
//     }
//     // console.log(Math.sqrt(peopleAges[i]))
// }console.log(newAges)

for(let i = 0; i < peopleAges.length; i++){
    if (peopleAges[i] >= 25 && peopleAges[i] <=50){
        newAges.push(peopleAges[i])
    }
}
console.log(newAges)


// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

shoppingCart.unshift("Meat");
console.log(shoppingCart)

shoppingCart.push("Sugar");
console.log(shoppingCart)

shoppingCart.splice(4, 1);
// shoppingCart.pop()
console.log(shoppingCart)

// shoppingCart.pop()
// console.log(shoppingCart) 

// shoppingCart.splice(3, 1, "Green Tea")
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)





// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
//If it does not exist add to the countries list.

// 

// Concatenate the following two variables and store it in a fullStack variable.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
//   console.log(countries[4]);
//  countries[4] = 'ETHIOPIA'
// console.log(countries[4])

// let worldPower = countries.includes("Ethiopia");

for (let i = 0; i < countries.length; i += 1){
    if (countries[i].includes("Ethiopia") ==){
        countries[i] = 'ETHIOPIA'
        // console.log('ETHIOPIA')
    }
}
console.log(countries)

// const webTechs = [
    // 'HTML',
    // 'CSS',
    // 'JavaScript',
    // 'React',
    // 'Redux',
    // 'Node',
    // 'MongoDB',
//   ]
// In the webTechs array check if Sass exists in the array and if it exists 
//print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array 
//and print the array.
// webTechs.push(Sass);
// console.log(webTechs)


// Personalstudy from the class video
let val;

val = document;
val = document.domain;
val = document.head;



console.log(val)

