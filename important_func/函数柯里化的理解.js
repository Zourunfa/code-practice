// 利用闭包灵活传参

function add() {
  let args = Array.prototype.slice.call(arguments)

  let inner = function () {
    args.push(...arguments)
    return inner
  }

  inner.toString = function () {
    return args.reduce(function (prev, cur) {
      return prev + cur
    })
  }

  return inner
}

// chrome现在需要加toString了
const res = add(1)(2)(3)(4).toString()
console.log(res)
