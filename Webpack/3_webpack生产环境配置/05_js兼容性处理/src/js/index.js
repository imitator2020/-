const promise=new Promise(resolve=>{
    setTimeout(()=>{
        console.log("定时器执行了");
        resolve;
    },2000)
});
console.log(promise);