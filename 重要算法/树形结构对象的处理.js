// 样例数据
let data = {
  name: 'jack',
  child: [
    { name: 'jack1' },
    {
      name: 'jack2',
      child: [{
        name: 'jack2-1',
        child: { name: 'jack2-1-1' }
      }, {
        name: 'jack2-2'
      }]
    },
    {
      name: 'jack3',
      child: { name: 'jack3-1' }
    }
  ]
}


function getChildName(data) {
  let list = [data];
  let nameList = [];

  while (list.length > 0) {
    const obj = list.shift();
    if (obj.hasOwnProperty('child')) {
      if (Array.isArray(obj.child)) {
        nameList.push(obj.name);
        list = list.concat(obj.child);
      } else {
        list.push(obj.child);
      }
    }
  }
  return nameList;
}



console.log(getChildName(data));