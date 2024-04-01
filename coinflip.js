function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
const fiveHeadsAsync = new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    let tailsCount= 0;
    while ((headsCount < 5) && (attempts <= 100)) {
        attempts++;
        let result = tossCoin();
        if (result === "heads") {
            headsCount++;
        } else {
            tailsCount++;
        }
    }
    if (attempts < 100) {
        resolve (`It took ${attempts} tries to flip 5 "heads"`);
    } else {
        reject (`Could not get 5 Heads in a row after 100 attempts`);
    }
}
);
fiveHeadsAsync
.then( res => console.log(res) )
.catch( err => console.log(err) );