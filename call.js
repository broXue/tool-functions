// call
function fn1() {
  console.log(this, arguments);
}
 
function fn2() {
  console.log(this);
}


Function.prototype.call1 = function(context){
  context = context ? Object(context) : window;
  context.fn = this;
  let args = []; //一个，一个的字符串
  for (let index = 1; index < arguments.length; index++) {
    args.push('arguments['+index+']');
  };
  // eval可以执行字符串，然后
  // 利用数组的toString方法，字符串和数组拼接的时候，会调用数组的toString方法，转为一个一个的字符串，context.fn('1', '2', '3')
  let r = eval('context.fn('+args+')');
  delete context.fn;
  return r;
}


// fn1.call1(fn2, 1,2,3);
// fn1.call.call.call(fn2);


Function.prototype.apply = function(context, arr){
  context = context ? Object(context) : window;
  context.fn = this;
  if(!arr){
    return context.fn();
  }
  // eval可以执行字符串，然后
  // 利用数组的toString方法，字符串和数组拼接的时候，会调用数组的toString方法，转为一个一个的字符串，context.fn('1', '2', '3')
  let r = eval('context.fn('+arr+')');
  delete context.fn;
  return r;
}

// fn1.apply(fn2, [1,2,3]);
fn1.apply.call.call(fn2);