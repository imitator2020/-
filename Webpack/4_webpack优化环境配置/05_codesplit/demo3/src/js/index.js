

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
import(/*webpackChunkName:test */'./test')
  .then(({plus,count})=>{
    //文件加载成功执行的操作
    //eslint-disable-next-line
    console.log(plus(2, 3));
  })
  .catch(()=>{
    //eslint-disable-next-line
    console.log("文件加载失败")
  })
// eslint-disable-next-line
      console.log(sum(1, 2, 3, 4));
