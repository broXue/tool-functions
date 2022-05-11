let obj = {
  name: 111
}

function fn() {
  console.log(this, arguments);
}

Function.prototype.bind = function(context){
  let that = this;
  let args = Array.prototype.slice.call(arguments, 1)
  let bindFn = function(){
    let bindArgs = Array.prototype.slice.call(arguments);
    // 如果bind执行的函数被new了，那么现在的this就是当前的bindFn, 因此要判断bindFn函数里的this是否是bindFn的实例
    that.apply(this instanceof bindFn ? bindFn : context , args.concat(bindArgs))
  }
  // 把this.prototype赋值给bindFn的prototype, 这样的话，new bindFn就能访问fn的原型
  bindFn.prototype = this.prototype;
  return bindFn;
}

fn.prototype.age = 100;
let bindFn = fn.bind(obj, 1111, 2222);
let d = new bindFn(3333);
console.log(d.age);

