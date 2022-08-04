function greeting() {
    let userName = 'Jessica';
    console.log(userName);

    if (userName === 'Jessica') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);  //No puede usarse fuera de la función donde fue declarada