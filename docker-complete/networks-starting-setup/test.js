const someFun = (callback) => {
    setTimeout(() => {
        const data = "Abul";
        callback(data);
    }, 3000)
};

someFun((param) => {
    console.log(`The received param is ${param}`);
})

const myClass = function(){};
const instance =  new myClass();