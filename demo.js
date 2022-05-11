function Animal(type) {
  this.type = type;
}

Animal.prototype.say = function(){
  console.log('say');
}


function mockNew() {
  let Con = [].shift.call(arguments);
  let obj = {};
  obj.__proto__ = Con.prototype;
  let r = Con.apply(obj,arguments)
  return r instanceof Object ? r : obj;
}

let d = mockNew(Animal, '1111');
console.log(d);
d.say();