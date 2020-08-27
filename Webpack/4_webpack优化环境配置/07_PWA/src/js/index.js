import { plus } from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
      console.log(sum(1, 2, 3, 4));
// eslint-disable-next-line
console.log(plus(2,3))
// 注册serviceWorker，同时需解决兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功');
      }).catch(() => {
        console.log('sw注册失败');
      });
  });
}
