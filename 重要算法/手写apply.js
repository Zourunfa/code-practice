
// debugger
// Function.prototype.myApply = function (context) {
//   var context = context || window

//   context.fn = this

//   var args = [...arguments].slice(1)

//   var res = context.fn(...args.flat())

//   delete context.fn

//   return res
// }



Function.prototype.myApply = function (context) {
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const res = context.fn(...args.flat())
  delete context.fn
  return res
}



let a = {
  value: 1
}
function getValue(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}
getValue.myApply(a, 'zhangshan', '12')