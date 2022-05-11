function findCurrentById(treeData,id){
  let current = '';

  if(treeData.length == 0) return;

  let findEle = (data,id) => {
    if(!id) return;
    data.forEach((item,index) => {
      if(item.id == id){
        current =  item
      }else{
        if(!!item.child){
          findEle(item.child,id)
        }
      }
    })
  }
  findEle(treeData, id);
  
  return current
}

let currentNode =  findCurrentById(treeData,'4')
console.log(currentNode)