function Animal(type) {
  this.type = type;
}

// 只有Animal的实例才能有eat属性
Animal.prototype.eat = function () {
  console.log('eat==eat');
}

// 想让病猫继承Animal的私有属性, 像让病猫继承Animal的type，但是不继承eat属性
function SickCat(type) {
  // Animal里的this就是指向SickCat，这个时候SickCat就有type属性
  Animal.call(this, type);
}

 // 获取父类的公共属性
//  SickCat.prototype.__proto__ = Animal.prototype；
 SickCat.prototype = Object.create(Animal.prototype);
 // 这个时候sickCat实例就有了Animal父类的公共属性

 let sickCat = new SickCat('哺乳类');
 console.log(sickCat.constructor); 

 // Object.create的原理
 function create(parentPrototype) {
  let Fn = function(){};
  Fn.prototype = parentPrototype;
  return new Fn;
 }
 