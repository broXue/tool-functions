let add1 = (function (total) {
  let allArgs = [];
  function _add(...args) {
    allArgs = [...allArgs, ...args];
    if(allArgs.length >= total){
      let sum = allArgs.reduce((prev, cur) => prev + cur, 0);
      allArgs.length = 0; // 这里要把length卸载掉
      return sum;
    }else{
      return _add
    }
  }
  return _add;
})(5);

function addFn(a, b, c, d, e) {
  return a + b + c + d + e;
}

function curry(fn, ...args) {
  return args.length < fn.length ? (...innerArgs) => curry(fn, ...args, ...innerArgs): fn(...args);
}

let add = curry(addFn);

console.log(add(1,2,3,4,5));
console.log(add(1)(2)(3)(4)(5));
console.log(add(1,2)(3,4,5));