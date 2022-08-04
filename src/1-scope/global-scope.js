//Variables

var a;          //Declaracion
var b = 'b';    //Declaracion y asignacion
b = 'a';        //Reasignacion
var a = 'a';    //Redeclaracion


//Global scope
var fruit = 'Apple';    //Global

console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

///---

function countries() {
    country = 'Bolivia';    //Global
    console.log(country);
}

countries();
console.log(country);