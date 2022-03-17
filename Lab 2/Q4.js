
async function getValue() {
    let value = 0;

    let prm = new Promise((resolve, reject) => {
        setTimeout(() => {
            value = 10;
            resolve(value);
        }, 1000);
    });

    return await prm;
}

getValue().then((value) => {
    console.log(value);
})
