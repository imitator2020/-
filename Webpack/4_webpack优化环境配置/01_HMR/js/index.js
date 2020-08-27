import '../css/iconfont.css';
import '../css/index.less'
import print from './print'
function add(x,y){
    return(x+y)
};
console.log(add(1,2))
if(module.hot){
    module.hot.accept('./print.js',function(){
        print()
    })
}