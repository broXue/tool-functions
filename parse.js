// 编写一个parse函数，实现访问对象里属性的值
let obj = {
  a: 1,
  b: {
    c: 2
  },
  d: [1,2,3],
  e: [
    {
      f: [4,5,6]
    }
  ]
}

function parse1(obj, str) { 
  let fn = new Function('obj', 'return obj.' + str);
  return fn(obj);
}

function parse(obj, str) {
  // 把d[2]替换为d.2, $1就是replace的第一个分组， 然后(\d+)就是获取d[2]里的2这个下标
  str = str.replace(/\[(\d+)\]/g, '.$1');
  // 按.分割str
  let attrs = str.split('.');
  attrs.forEach(item => {
    obj = obj[item];
  });
  return obj;
}

let r1 = parse(obj, 'a'); // 1
let r2 = parse(obj, 'b.c'); // 2
let r3 = parse(obj, 'd[2]'); // 3
let r4 = parse(obj, 'e[0].f[0]'); // 4

console.log(r1, r2, r3, r4);







