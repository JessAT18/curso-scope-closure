var firstName;  //= undefined
firstName = 'Jessica';
console.log(firstName);

var lastName = "Aquino";    // Declaracion y asignacion
lastName = "Torrez";        // Reasignacion

console.log(lastName);

var secondName = 'Andrea';  // Declaracion y asignacion
var secondName = 'Ortega';  // Reasignacion
console.log(secondName);

//Let

let fruit = 'Apple';        // Declaracion y asignacion
fruit = 'Kiwi';             // Reasignacion
console.log(fruit);
//let fruit = 'Pineapple';    //  No se puede reasignar let

//const
const animal = 'dog';       // Declaracion y asignacion
//animal = 'cat';             // No se puede reasignar
//const animal = 'snake';     // No se puede declarar nuevamente
console.log(animal);

const vehicles = [];
vehicles.push('Auto');
console.log(vehicles);
vehicles.pop();
console.log(vehicles);