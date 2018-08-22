
console.log('start');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //    name: 'test',
        //    age: 123
        // });
        reject('uhoh....');
    }, 1500)
    
});
console.log('after');
promise.then((data) => {
    console.log(data);
}).catch((error)=> {
    console.log('error ', error);
});