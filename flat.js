// 数组扁平化的方法

let arr = [1, [2, 3], [4,5,[6,7,[8,9]]]];

// 1、arr.flat(Infinity)
// console.log(arr.flat(Infinity));

// 2、循环遍历
let result = [];
function flatten(arr) {
  arr.forEach(item => {
    if(Array.isArray(item)){
      flatten(item)
    }else{
      result.push(item);
    }
  });
}
flatten(arr);
// console.log('result', result);

// 3、toString split
let newArr = arr.toString().split(',').map(item => Number(item))
// console.log(newArr);

// 4、JSON.stringify  replace
let newArr1 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',').map(item => Number(item))
// console.log(newArr1);

// 5、concat 可以展开一层
// while循环，然后只要arr里有一个数组就继续循环
while (arr.some(item => Array.isArray(item))) {
  arr = [].concat(...arr);
}

// console.log('arr', arr);

