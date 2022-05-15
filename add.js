let add = (function (total) {
  let allArgs = [];
  function _add(...args) {
    allArgs = [...allArgs, ...args];
    if(allArgs.length >= total){
      console.log(222);
      let sum = allArgs.reduce((prev, cur) => prev + cur, 0);
      allArgs.length = 0; // 这里要把length卸载掉
      return sum;
    }else{
      return _add
    }
  }
  return _add;
})(5);

console.log(add(1,2,3,4,5));
console.log(add(1)(2)(3)(4)(5));
console.log(add(1,2)(3,4,5));