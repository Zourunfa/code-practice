console.log(str); //报错

let str = 'dahsahfaoe'

// 暂时性死区要求你必须先声明再使用


let a = 1

function fn() {
  console.log(a); //报错
  let a = 2
}



function run(a = b, b = 3) {//报错

}
run() // 