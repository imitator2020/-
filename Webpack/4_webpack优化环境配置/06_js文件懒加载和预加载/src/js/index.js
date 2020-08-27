console.log("index.js执行了")

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
//懒加载
document.getElementById("btn1").onclick =function(){
  import(/*webpackChunkName:'test',webpackPrefetch:true */'./test').then(({plus})=>{
    console.log(plus(2,3));
  })
}