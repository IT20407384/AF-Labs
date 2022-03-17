function getValue1() {
    let value = 0;
    setTimeout(() => {
        value =10;
    },1000);

    return value;
}

console.log(getValue1());

/////////////////////////////

function getValue2(callback) {
    let value = 0;
    setTimeout(() => {
        value =10;
        callback(value);
    },1000);
}

getValue2((value) => {
    console.log(value);
})

////////////////////////////////

function getValue3(){
    let value = 0;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            value = 10;
            resolve(10);
        },1000);
    })
}

getValue3().then((value) => {
    console.log(value);
})

/////////////////////////

function getValueApi() {
    let value = 0;

    return new Promise((resolve, reject) => {
        value = 10;
        setTimeout(() => {
            resolve(value);
        },1000)
    })
}

function getValueDb(apiValue) {
    let value = 10;

    return new Promise((resolve, reject) => {
        value = 100;
        setTimeout(() => {
            resolve(apiValue*value);
        },1000);
    })
}

getValueApi().then((value) => {
    return getValueDb(value);
}).then((finalVal) => {
    console.log(finalVal);
})



