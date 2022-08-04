// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox(name) {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox ${name}: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox('Andrea');
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxJess = moneyBox('Jess');
moneyBoxJess(10);
moneyBoxJess(20);
moneyBoxJess(25);