function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(JSON.parse(this.response))
      } else {
        reject(this)
      }
    }
  })
}

ajax('http://localhost:8888/php/user.php?name=向军')
  .then(user => ajax(`http://localhost:8888/php/houdunren.php?id=${user['id']}`))
  .then(lesson => {
    console.log(lesson)
  })

function getJson(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return
      // 当请求成功或失败时，改变 promise 的状态
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    // 设置错误监听函数
    xhr.onerror = function () {
      reject(new Error(this.statusText))
    }
    // 设置响应的数据类型
    xhr.responseType = 'json'
    // 设置请求头信息
    xhr.setRequestHeader('Accept', 'application/json')
    // 发送 http 请求
    xhr.send(url)
  })
}
