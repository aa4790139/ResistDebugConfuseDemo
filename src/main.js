// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import devTools from "devtools-detect";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
//-------------------------------------------------------------------------
//监听F12、Ctrl+Shift+i、Ctrl+s
/*document.onkeydown = function (event) {
  if (event.key === "F12") {
    window.close();
    window.location = "about:blank";
  } else if (event.ctrlKey && event.shiftKey && event.key === "I") {//此处I必须大写
    window.close();
    window.location = "about:blank";
  } else if (event.ctrlKey && event.key === "s") {//此处s必须小写
    event.preventDefault();
    window.close();
    window.location = "about:blank";
  }

};
//-------------------------------------------------------------------------
//监听右键菜单
document.oncontextmenu = function () {
  window.close();
  window.location = "about:blank";
};
//-------------------------------------------------------------------------
var h = window.innerHeight, w = window.innerWidth;

window.onresize = function () {
  if (h !== window.innerHeight || w !== window.innerWidth) {
    window.close();
    window.location = "about:blank";
  }
}
//-------------------------------------------------------------------------
//控制台打开的时候回调方法
function consoleOpenCallback(){
  window.close();
  window.location = "about:blank";
  return "";
}
//-------------------------------------------------------------------------
//立即运行函数，用来检测控制台是否打开
!function () {
  // 创建一个对象
  let foo = /./;
  // 将其打印到控制台上，实际上是一个指针
  console.log(foo);
  // 要在第一次打印完之后再重写toString方法
  foo.toString = consoleOpenCallback;
}()*/
//-------------------------------------------------------------------------
/*function consoleOpenCallback() {
  document.body.innerHTML='年轻人，不要太好奇';
  window.close();
  window.location = "about:blank";
}

setInterval(function () {
  const before = new Date();
  (function(){}).constructor("debugger")();
  // debugger;
  const after = new Date();
  const cost = after.getTime() - before.getTime();
  if (cost > 100) {
    consoleOpenCallback();
  }
}, 1000);*/
//-------------------------------------------------------------------------
/*let div = document.createElement('div');
let loop = setInterval(() => {
  console.log(div);
  console.clear();
});
Object.defineProperty(div,"id", {get: () => {
    clearInterval(loop);
    alert("Dev Tools detected!");
  }});*/
//-------------------------------------------------------------------------
