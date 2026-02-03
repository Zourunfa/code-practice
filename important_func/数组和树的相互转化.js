let arr = [
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 1, name: '部门A', parentId: 2 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 },
]

function totree(list, parId) {
  let obj = {}
  let result = []
  //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
  list.map(el => {
    obj[el.id] = el
  })
  for (let i = 0, len = list.length; i < len; i++) {
    let id = list[i].parentId
    if (id == parId) {
      result.push(list[i])
      continue
    }
    if (obj[id].children) {
      obj[id].children.push(list[i])
    } else {
      obj[id].children = [list[i]]
    }
  }
  return result
}

function toTree(list, parId) {
  let len = list.length
  function loop(parId) {
    let res = []
    for (let i = 0; i < len; i++) {
      let item = list[i]
      if (item.parentId === parId) {
        item.children = loop(item.id)
        res.push(item)
      }
    }
    return res
  }
  return loop(parId)
}

let tree = [
  {
    id: 1,
    name: 'text1',
    parentId: 1,
    children: [
      {
        id: 2,
        name: 'text2',
        parentId: 1,
        children: [
          {
            id: 4,
            name: 'text4',
            parentId: 2,
          },
        ],
      },
      {
        id: 3,
        name: 'text3',
        parentId: 1,
      },
    ],
  },
]

function deep(node) {
  let stack = node,
    data = []
  while (stack.length != 0) {
    let pop = stack.pop()
    data.push({
      id: pop.id,
      name: pop.name,
      parentId: pop.parentId,
    })
    let children = pop.children
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return data
}

console.log(totree(arr))
