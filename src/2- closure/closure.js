function greeting() {
    let username = 'Jessica';

    function displayUsername() {
        return `Hello ${username}`;
    }

    return displayUsername;
}

const g = greeting();
console.log(g);         //[Function: displayUsername]
console.log(g())        //Hello Jessica