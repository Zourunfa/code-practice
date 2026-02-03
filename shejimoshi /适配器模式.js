/**
 * 将一个接口转换成客户希望的另一个接口，使接口不兼容的那些类一起工作
 */

class Adaptee{
  specialRequest(){
    return '外国插座'
  }
}
class Target{
  constructor(){
    this.adaptee = new Adaptee()
  }
  request(){
    let foreignPlug = this.adaptee.specialRequest()
    return  `${foreignPlug} -- 适配 -- 国产插座`
  }
}

const target = new Target()
console.log(target.request());