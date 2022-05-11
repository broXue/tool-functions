function deepClone(obj, hash = new WeakMap()) {
  if(obj == null) return obj;
  if(obj instanceof Date) return new Date(obj);
  if(obj instanceof RegExp) return new RegExp(obj);
  // 处理循环引用的问题
  if(hash.get(obj)) return hash.get(obj);
  // 如果是原型数据类型
  if(typeof obj !== 'object') return obj;
  // 如果是对象或者数组的话, obj.constructor，就是Function: array,或者Function:object,也就是当前对象的构造函数，
  // new obj.constructor,obj是数组就是返回的是数组，是对象就返回的是对象
  let cloneObj = new obj.constructor;
  hash.set(obj, cloneObj);
  
  for(let key in obj){
    cloneObj[key] = deepClone(obj[key], hash);
  }
  return cloneObj;
}

let obj = {
  name: 'seed',
  address: {
    x: 100, 
    y: 100
  }
};


obj.name = 'ddd';
obj.address.x = 200;
obj.d = obj; // 循环引用，这个时候clone就会爆栈

let cloneObj = deepClone(obj);
console.log(cloneObj);

// weakMap的弱引用，key是对象