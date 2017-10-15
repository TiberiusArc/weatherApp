let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number'&& typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('arguments must be numbers');
            }
        }, 1500)
    });
};

asyncAdd(8, 8).then((res) => {
    console.log(res);
    return asyncAdd(res, 'yy')
}).then((res) => {
    console.log(res);
}).catch((errorMessage)  => {
    console.log(errorMessage);
});
/*

let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('hey there pal')
        reject('no, sorry mate')
    }, 2500)
});

somePromise.then((message) => {
    console.log('Success', message);
}, (errorMessage) => {
    console.log('error: ', errorMessage)
});*/
