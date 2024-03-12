async function runnerFunction() {
    let runner1 = false;
    let runner2 = false;
    let loser = "";

    const runner1Go = new Promise((resolve, reject) => {
        setTimeout(() => {
            loser = "runner1";
            resolve(true);
        }, Math.random() * 10000);
    });

    const runner2Go = new Promise((resolve, reject) => {
        setTimeout(() => {
            loser = "runner2";
            resolve(true);
        }, Math.random() * 10000);
    });

    const result1 = await runner1Go;
    const result2 = await runner2Go;

    return [result1, result2, loser];
}

runnerFunction().then((resultArray) => {
    console.log("Loser:", resultArray[2]);
});