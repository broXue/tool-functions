function Animal(type) {
  // this.type = type;
  return  {
    name: 1
  }
}

Animal.prototype.say = function(){
  console.log('say');
}

// let animal = new Animal('哺乳类');
// console.log('animal', animal);
// animal.say();

function mockNew() {
  let Con = [].shift.call(arguments);
  let obj = {};
  // 实例对象的原型链指向构造函数的原型
  obj.__proto__ = Con.prototype;
  // 执行构造函数，传入参数
  let r = Con.apply(obj, arguments);

  return r instanceof Object ? r : obj;
}

let animal1 = mockNew(Animal, '1111');
// animal1.say();
console.log('animal1', animal1);