
// 传统方式
function query(name) {
  const search = location.search.substr(1)
  // search 'a=10&b=20&c=30'
  const reg = new RegExp(`(^|$)${name}=([^$]*)(&|$)`, 'i')
  const res = search.match(reg)
  if (res === null) {
    return null
  }
  return res[2]
}

// 新的API  URLsearchParams (考虑兼容性问题)
function query(name){
  const search = location.search
  const  p = new URLSearchParams(search)
  return p.get(name)
}