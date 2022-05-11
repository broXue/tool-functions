function after(times, callback) {
  return function () {
    if(--times == 0){
      callback();
    }
  }
}

let fn = after(3, function(){
  console.log(3333);
});

// fn();
// fn();
// fn();

// 手写promise
let p = new Promise((resolve, reject) => {
  resolve(1111)
});

p.then((value) => {
  console.log('value', value);
}, (err) => {
  console.log('err', err);
})