class A {

}
let a = new A();
// console.log(a instanceof A);
// console.log(a.__proto__ === A.prototype);

function instance(ins, con) {
  con = con.prototype;
  ins = ins.__proto__;
  while (true) {
    if(ins == null){ // 因为会一直顺着原型链一直找，Object.prototype.__proto__是null
      return false;
    }
    if(ins == con){
      return true;
    }
    ins = ins.__proto__; // 一层一层顺着__proto__找
  }
}

console.log(instance(a, A));

// Object.prototype.toString.call([]), 只能判断现有的对对象，但是不能判断自定义的对象，
// 自定义的对象可以用 instanceof 判断

